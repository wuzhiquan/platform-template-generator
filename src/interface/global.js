import { api } from './api';
// method格式统一用小写
export default {
  // 登录接口
  login(params) {
    return api({ url: '/auth/v1/login', params, method: 'post' });
  },
  changePassword(params) {
    return api({ url: '/mn/v1/login/resetpwd', params, method: 'post' });
  },
};
