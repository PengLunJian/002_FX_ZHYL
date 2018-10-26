import apis from '../../apis/index';
import store from '../../vuex/store';

const controllers = {
  hideCode: function () {
    this.$router.back();
  },
  ajaxRequestDefaultCard: function () {
    this.$axios.post(apis.selectDefaultCard.url)
      .then((res) => {
        console.log(res);
        store.commit({
          type: 'updateDefaultCard',
          data: res.data
        });
        this.$vux.loading.hide();
      })
      .catch((err) => {
        this.$vux.loading.hide();
        console.log(err);
      });
  }
};

export default controllers;
