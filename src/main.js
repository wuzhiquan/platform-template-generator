import Vue from 'vue';
import 'normalize.css/normalize.css';
import VConsole from 'vconsole/dist/vconsole.min';
import { Dialog, Toast, Icon } from 'vant';
import api from '@/interface';
import 'amfe-flexible';
import './assets/css/iconfont.css';
import App from './App';
import router from './router';
import store from './store';
import { getQueryString } from './common/js/util';

Vue.prototype.$api = api;

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line no-new
  new VConsole();
}

Vue.use(Dialog);
Vue.use(Toast);
Vue.use(Icon);
Vue.config.productionTip = false;
// acrossSessionstorage();

let backHost = getQueryString('backHost');
if (backHost) {
  backHost = backHost.includes('http') ? backHost : `http://${backHost}`;
  if (backHost !== 'null' && backHost) { sessionStorage.setItem('backHost', backHost); }
}

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
