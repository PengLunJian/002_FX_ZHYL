import Vue from 'vue';
import App from './App';
import router from './router';
import store from './vuex/store';
import axios from './axios/axios';
import Routes from './router/routes';
import {ToastPlugin, LoadingPlugin} from 'vux';
import VueWaves from 'vue-waves/dist/vue-waves.js';
import VueLazyload from 'vue-lazyload';

// require('./mock/mock.js');

Vue.use(VueWaves);
Vue.use(ToastPlugin);
Vue.use(LoadingPlugin);
Vue.prototype.$axios = axios;
Vue.prototype.$routes = Routes;
Vue.use(VueLazyload, {
  attempt: 1,
  preLoad: 1,
  error: 'loading_pic.png',
  loading: require('./assets/images/loading_pic.png')
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});
