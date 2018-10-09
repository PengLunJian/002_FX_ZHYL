import Vue from 'vue';
import App from './App';
import router from './router';
import store from './vuex/store';
import numKeyboard from 'vue2-num-keyboard';
import {ToastPlugin, LoadingPlugin} from 'vux';
import VueScroller from 'vue-scroller';
import VueWaves from '../node_modules/vue-waves/dist/vue-waves.js';

Vue.use(VueWaves);
Vue.use(LoadingPlugin);
Vue.use(ToastPlugin);
Vue.use(VueScroller);
Vue.use(numKeyboard);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});
