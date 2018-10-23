import apis from '../../apiMain/index';

const controllers = {
  addVisitor: function () {
    this.$router.push({
      path: this.$routes.KPBL.path
    });
  },
  changeVisitor: function () {
    this.$router.push({
      path: this.$routes.HZLB.path
    });
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
