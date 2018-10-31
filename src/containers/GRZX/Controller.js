import apis from '../../apis';
import {
  updateDefaultCardFun
} from '../../vuex/actions';

const controller = {
  ajaxRequestDefaultCard() {
    this.$axios.post(apis.selectDefaultCard)
      .then((res) => {
        this.$vux.loading.hide();
        const {data} = res;
        if (data && typeof data === 'object') {
          this.$store.dispatch(updateDefaultCardFun(data));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export default controller;
