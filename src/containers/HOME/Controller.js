import apis from '../../apiMain/index';

const controllers = {
  addPerson: function () {
    this.$router.push({
      path: this.$routes.KPBL.path
    });
  },
  showModal: function () {
    this.isShow = true;
  },
  showCode: function () {
    this.$router.push({
      path: this.$routes.JZTM.path
    });
  },
  ajaxRequestDeviceId: function () {
    this.$axios(apis.selectDeviceId)
      .then((res) => {
        this.deviceId = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
};

export default controllers;
