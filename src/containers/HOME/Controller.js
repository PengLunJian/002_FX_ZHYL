import apiMain from '../../apiMain/apiMain';

const controllers = {
  addPerson: function () {
    this.$router.push({
      path: this.$routes.KPBL.path
    });
  },
  ajaxLogin: function () {
    this.$http(apiMain.login)
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
