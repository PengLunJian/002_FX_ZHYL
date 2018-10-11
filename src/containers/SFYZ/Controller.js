import routes from '../../router/routes';
const controllers = {
  handlerScanner: function () {
    this.$router.push({
      path: routes.SMKS.path
    });
  },
  handlerBtnClick: function () {
    if (!this.status) {
      this.$router.push({
        path: routes[24].path
      });
    }
  }
};

export default controllers;
