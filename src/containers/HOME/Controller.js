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
    this.$axios.post(apis.selectDefaultCard)
      .then((res) => {
        this.$vux.loading.hide();
        const {data} = res;
        if (data && typeof data === 'object') {
          store.commit({
            type: 'UPDATE_DEFAULT_CARD',
            data: data
          });
          this.isSelect = true;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export default controllers;
