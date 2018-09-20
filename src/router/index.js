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
import GHXQ from '../containers/GHXQ/Index.vue'
import YYXQ from '../containers/YYXQ/Index.vue'
import WDYY from '../containers/WDYY/Index.vue'
import JFJL from '../containers/JFJL/Index.vue'
import DJCLB from '../containers/DJCLB/Index.vue'
import JKDA from '../containers/JKDA/Index.vue'
import JCBG from '../containers/JCBG/Index.vue'
import GRXX from '../containers/GRXX/Index.vue'
import SCSFZ from '../containers/SCSFZ/Index.vue'
import DZJZKBL from '../containers/DZJZKBL/Index.vue'
import JCXX from '../containers/JCXX/Index.vue'
import JZRLB from '../containers/JZRLB/Index.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
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
  },
  {
    path: '/Nav01/GHXQ',
    name: 'GHXQ',
    component: GHXQ
  },
  {
    path: '/Nav01/WDYY',
    name: 'WDYY',
    component: WDYY
  },
  {
    path: '/Nav01/JFJL',
    name: 'JFJL',
    component: JFJL
  },
  {
    path: '/Nav01/DJCLB',
    name: 'DJCLB',
    component: DJCLB
  },
  {
    path: '/Nav01/JKDA',
    name: 'JKDA',
    component: JKDA
  },
  {
    path: '/Nav01/JCBG',
    name: 'JCBG',
    component: JCBG
  },
  {
    path: '/Nav01/GRXX',
    name: 'GRXX',
    component: GRXX
  },
  {
    path: '/Nav01/DZJZKBL',
    name: 'DZJZKBL',
    component: DZJZKBL
  },
  {
    path: '/Nav01/SCSFZ',
    name: 'SCSFZ',
    component: SCSFZ
  },
  {
    path: '/Nav01/JCXX',
    name: 'JCXX',
    component: JCXX
  },
  {
    path: '/Nav01/JZRLB',
    name: 'JZRLB',
    component: JZRLB
  },
  {
    path: '/Nav01/YYXQ',
    name: 'YYXQ',
    component: YYXQ
  }
]

export default new Router({
  mode: 'history',
  routes: routes
})
