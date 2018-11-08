import Vue from 'vue';
import Router from 'vue-router';
import Routes from './routes';
import Pages from './pages';

Vue.use(Router);

const routes = (() => {
  const tempRoutes = [];
  for (let key in Routes) {
    Routes[key].component = Routes[key].component(Pages[key]);
    tempRoutes.push(Routes[key]);
  }
  return tempRoutes;
})();

export default new Router({
  mode: 'history',
  routes: routes
});
