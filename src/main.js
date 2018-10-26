import Vue from 'vue';
import App from './App';
import router from './router';
import store from './vuex/store';
import axios from './axios/axios';
import Routes from './router/routes';
import {ToastPlugin, LoadingPlugin} from 'vux';
import VueWaves from '../node_modules/vue-waves/dist/vue-waves.js';

Vue.use(VueWaves);
Vue.use(LoadingPlugin);
Vue.use(ToastPlugin);
Vue.prototype.$axios = axios;
Vue.prototype.$routes = Routes;

Vue.config.productionTip = false;

setInterval(function () {
  axios.get('http://192.168.3.162:7007');
}, 30000);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});
