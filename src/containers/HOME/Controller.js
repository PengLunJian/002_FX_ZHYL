import routes from '../../router/routes';
import apiMain from '../../apiMain/apiMain';

const controllers = {
  addPerson: function () {
    this.$router.push({
      path: routes[15].path
    });
  },
  ajaxLogin: function () {
    this.$http.get(apiMain.getUrl('login'));
  }
};

export default controllers;
