import {mapActions} from 'vuex';

const controller = {
  closePage() {
    this.$router.back();
  },
  exeSelectDefaultCard() {
    this.$vux.loading.show({
      text: '加载中...'
    });
    this.selectDefaultCard()
      .then((res) => {
        this.$vux.loading.hide();
      })
      .catch((err) => {
        console.log(err);
        this.$vux.loading.hide();
      });
  },
  ...mapActions([
    'selectDefaultCard'
  ])
};

export default controller;
