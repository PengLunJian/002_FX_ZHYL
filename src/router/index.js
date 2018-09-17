import Vue from 'vue'
import Router from 'vue-router'
import Home from '../containers/Home/Index.vue'
import Bespoke from '../containers/Bespoke/Index.vue'
import Doctors from '../containers/Doctors/Index.vue'

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
    name: 'Bespoke',
    component: Bespoke
  },
  {
    path: '/Nav01/Doctors',
    name: 'Doctors',
    component: Doctors
  }
]

export default new Router({
  mode: 'history',
  routes: routes
})
