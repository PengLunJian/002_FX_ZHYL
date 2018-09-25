import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import { ToastPlugin, LoadingPlugin } from 'vux'
import VueWaves from '../node_modules/vue-waves/dist/vue-waves.js'

Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)
Vue.use(VueWaves)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
