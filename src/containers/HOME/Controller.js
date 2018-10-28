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
  showContent: function () {
    if (this.clazz === 'hide') {
      const height = this.$refs.inner.offsetHeight;
      this.style = 'height:' + (height / this.fontSize) + 'rem;';
      this.clazz = '';
    } else {
      this.style = 'height:' + 0 + 'px;';
      this.clazz = 'hide';
    }
  },
  ajaxRequestDeviceId: function () {
    return this.$axios.post(apis.selectDeviceId.url);
  },
  ajaxRequestDefaultCard: function () {
    return this.$axios.post(apis.selectDefaultCard.url);
  },
  ajaxRequestAll: function () {
    this.$axios.all(
      [
        this.ajaxRequestDeviceId(),
        this.ajaxRequestDefaultCard()
      ])
      .then(this.$axios.spread((res1, res2) => {
        this.isLoading = true;
        store.commit({
          type: 'updateDefaultCard',
          data: res2.data
        });
        this.deviceId = res1.data;
        this.$vux.loading.hide();
      }))
      .catch((err) => {
        console.log(err);
        this.$vux.loading.hide();
      });
  }
};

export default controllers;
