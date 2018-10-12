import apis from '../../apiMain/index';

const controllers = {
  addPerson: function () {
    this.$router.push({
      path: this.$routes.KPBL.path
    });
  },
  ajaxLogin: function () {
    this.$axios(apis.login)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  showModal: function () {
    this.isShow = true;
  },
  showCode: function () {
    this.$router.push({
      path: this.$routes.JZTM.path
    });
  }
};

export default controllers;
