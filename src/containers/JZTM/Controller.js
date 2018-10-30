import apis from '../../apis/index';

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
        this.$store.dispatch({
          type: 'updateDefaultCard',
          data: data
        });
      })
      .catch((err) => {
        this.$vux.loading.hide();
        console.log(err);
      });
  }
};

export default controller;
