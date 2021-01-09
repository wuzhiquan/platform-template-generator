import axios from 'axios';
import Cookies from 'js-cookie';
import { Toast } from 'vant';
import { stringify } from 'qs';
import { logout } from '@/common/js/util';
import store from '@/store';
import router from '@/router';

axios.defaults.timeout = 30000;
axios.defaults.retry = 3;
axios.defaults.retryDelay = 1000;

// 定义全局变量clearRequest，在route.js中要用到
const clearRequest = {
  source: {
    token: null,
    cancel: null,
  },
};
const CancelToken = axios.CancelToken;
const source = CancelToken.source();
// 添加请求拦截器
axios.interceptors.request.use(
  (config) => {
    config.cancelToken = clearRequest.source.token;
    return config;
  },
  error => Promise.reject(error),
);
// 添加响应拦截器
axios.interceptors.response.use(
  response => response,
  (error) => {
    if (error.response.status === 401) {
      Toast('权限失效，返回登录');
      setTimeout(() => {
        logout();
      }, 1000);
    }
    return Promise.reject(error);
  },
);
export function api(data) {
  const { url, method, isStringify } = data;
  let params = data.params;
  const token = Cookies.get('token');
  const newHeader = {
    'Content-Type': 'application/json;charset=UTF-8',
    Authorization: `Bearer ${token}`,
  };
  // 需要序列化
  if (isStringify) {
    newHeader['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
    if (method !== 'get') {
      params = stringify(params, { arrayFormat: 'repeat' });
    }
  }
  let backHost = sessionStorage.backHost;
  if (!backHost) { router.replace('/login'); }
  if (!url.includes('auth')) {
    backHost = `${backHost}/ssd/v1.0`;
  }
  const newApi = `${backHost}${url}`;
  store.commit('app/UPDATE_LOADING', true);
  return axios(
    { method,
      url: newApi,
      cancelToken: source.token,
      timeout: 30000,
      data: params,
      params: method.toLocaleLowerCase() === 'get' ? params : {},
      headers: newHeader,
      paramsSerializer(p) {
        return stringify(p, { arrayFormat: 'repeat' });
      },
    })
    .then((res) => {
      store.commit('app/UPDATE_LOADING', false);
      if (+res?.data?.code === 401) {
        Toast('权限失效，返回登录');
        setTimeout(() => {
          logout();
        }, 1000);
      }
      return Promise.resolve(res.data);
    })
    .catch((e) => {
      store.commit('app/UPDATE_LOADING', false);
      console.log(e.message);
    });
}
export { clearRequest };
