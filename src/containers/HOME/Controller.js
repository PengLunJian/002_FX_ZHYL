import apis from '../../apis/index';
import store from '../../vuex/store';

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
  },
  ajaxRequestDefaultCard: function () {
    this.$axios(apis.selectDefaultCard)
      .then((res) => {
        store.commit({
          type: 'updateDefaultCard',
          data: res.data
        });
        // console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
};

export default controllers;
