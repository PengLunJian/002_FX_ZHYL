import apis from '../../apis/index';
import {
  updateDefaultCardFun
} from '../../vuex/actions';

const controller = {
  closePage() {
    this.$router.back();
  },
  ajaxRequestDefaultCard() {
    this.$axios.post(apis.selectDefaultCard)
      .then((res) => {
        this.$vux.loading.hide();
        this.isLoading = true;
        const {data} = res;
        this.$store.dispatch(updateDefaultCardFun(data));
      })
      .catch((err) => {
        this.$vux.loading.hide();
        console.log(err);
      });
  }
};

export default controller;
