import routes from '../../router/routes';

const controller = {
  handlerClick: function () {
    this.$router.push({
      path: routes[2].path
    });
  }
};

export default controller;
