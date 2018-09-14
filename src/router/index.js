import Vue from 'vue'
import Router from 'vue-router'
import Index from '../containers/Home/index.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  }
]

export default new Router({
  mode: 'history',
  routes: routes
})
