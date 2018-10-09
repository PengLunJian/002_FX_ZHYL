import Vue from 'vue';
import Router from 'vue-router';
import Routes from './routes';
import components from './components';

Vue.use(Router);

const routes = Routes.map((item) => {
  const component = components[item['name']];
  item.component = item.component(component);
  return item;
});

export default new Router({
  mode: 'hash',
  routes: routes
});
