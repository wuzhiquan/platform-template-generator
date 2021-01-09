/* eslint-disable no-unused-expressions */
/**
 * 工具函数
 */
import dayjs from 'dayjs';
import Cookies from 'js-cookie';
import router from '@/router/index';

// 获取url里面对应键的值
export function getQueryString(name) {
  // 匹配目标参数
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
  // 对querystring匹配目标参数
  const hrefs = window.location.hash.split('?');
  const result = hrefs.length > 1 ? hrefs[1].match(reg) : null;
  if (result != null) {
    return decodeURIComponent(result[2]);
  }
  return null;
}

// 格式转化,date为正常能识别的时间格式，str是想要转化成的格式
export function dateFormat(date, str) {
  return dayjs(date).format(str);
}
/**
 * 数组去重
 * @param {*} arr 接收的原数组
 * @param {*} key 如果是对象数组[{id: 1}, {id: 2}, {id: 3}]，则需要以什么key作为重复的标准，普通数组[1,2,3,2]不需要
 */
export function arrUnique(arr, key) {
  let returnArr = [];
  if (key) {
    // 对象数组去重
    const obj = {};
    returnArr = arr.reduce((cur, next) => {
      obj[next[key]] ? '' : obj[next[key]] = true && cur.push(next);
      return cur;
    }, []);
    return returnArr;
  }
  // 普通数组去重
  returnArr = arr.reduce((cur, next) => {
    !cur.includes(next) && cur.push(next);
    return cur;
  }, []);
  return returnArr;
}

// 退出登录方法
export function logout() {
  Cookies.remove('token');
  router.push('/login');
  localStorage.removeItem('userInfo');
}

/**
 * sessionstorage跨tab标签取值
 * 原理：利用同源页面-storage的监听事件
 * 《h5移动web开发指南》当同源页面的某个页面修改了localStorage,其余的同源页面只要注册了storage事件，就会触发
 */
export function acrossSessionstorage() {
  // 当前页面没有sessionStorage【当开启了一个新的tab页是触发】
  if (!sessionStorage.length) {
    localStorage.setItem('getSessionStorage', Date.now());
    localStorage.removeItem('getSessionStorage');
  }
  // 监听storage事件
  window.addEventListener('storage', (event) => {
    /*
      1、目的：触发原页面在localStorage存一下sessionStorage，向其它的tab的页面发送一个信号，触发下面那个key='sessionStorage'的分支
      2、解释：在原来的页面就会触发事件，将sessionStorage存入localStorage，为了触发storage监听，然后清除localStorage，不留痕迹，也就一瞬间的事情
    */
    if (event.key === 'getSessionStorage') {
      // Some tab asked for the sessionStorage -> send it
      localStorage.setItem('sessionStorage', JSON.stringify(sessionStorage));
      localStorage.removeItem('sessionStorage');
    } else
    /*
      1、目的：在tabs页面中通过上面的触发，接受sessionStorage的参数
      2、解释：storage监听到key = sessionStorage的取出存入的sessionStorage，循环存入新的标签
    */
    if (event.key === 'sessionStorage' && !sessionStorage.length) {
      // sessionStorage is empty -> fill it

      const data = JSON.parse(event.newValue);
      Object.keys(data).map((key) => {
        sessionStorage.setItem(key, data[key]);
        return null;
      });
    }
  });
}
