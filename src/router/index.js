import Vue from 'vue'
import Router from 'vue-router'
import Home from '../containers/HOME/Index.vue'
import YYGH from '../containers/YYGH/Index.vue'
import YSLB from '../containers/YSLB/Index.vue'
import YYXX from '../containers/YYXX/Index.vue'
import KSXX from '../containers/KSXX/Index.vue'
import YSZY from '../containers/YSZY/Index.vue'
import GRZX from '../containers/GRZX/Index.vue'
import WDGH from '../containers/WDGH/Index.vue'
Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Nav01',
    name: 'YYGH',
    component: YYGH
  },
  {
    path: '/Nav01/YSLB',
    name: 'YSLB',
    component: YSLB
  },
  {
    path: '/Nav01/YYXX',
    name: 'YYXX',
    component: YYXX
  },
  {
    path: '/Nav01/KSXX',
    name: 'KSXX',
    component: KSXX
  },
  {
    path: '/Nav01/YSZY',
    name: 'YSZY',
    component: YSZY
  },
  {
    path: '/Nav01/GRZX',
    name: 'GRZX',
    component: GRZX
  },
  {
    path: '/Nav01/WDGH',
    name: 'WDGH',
    component: WDGH
  }
]

export default new Router({
  mode: 'history',
  routes: routes
})
