import Vue from 'vue';
import Router from 'vue-router';
import axios from 'axios';
import { clearRequest } from '@/interface/api';
import homeRouter from './home';
import mineRouter from './mine';
import patientRouter from './patient';
import messageRouter from './message';

Vue.use(Router);
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
const router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login',
    }, {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/login'),
    },
    ...homeRouter,
    ...patientRouter,
    ...messageRouter,
    ...mineRouter,
  ],
});
router.beforeEach((to, from, next) => {
  // 取消上一页接口请求
  const CancelToken = axios.CancelToken;
  if (clearRequest.source.cancel) {
    clearRequest.source.cancel();
  }
  clearRequest.source = CancelToken.source();
  next();
});
export default router;
