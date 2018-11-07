import {mapActions} from 'vuex';

const controller = {
  exeSelectDefaultCard() {
    this.$vux.loading.show({
      text: '加载中...'
    });
    this.selectDefaultCard()
      .then((res) => {
        console.log(res);
        this.$vux.loading.hide();
      })
      .catch((err) => {
        this.$vux.loading.hide();
        console.log(err);
      });
  },
  ...mapActions([
    'selectDefaultCard'
  ])
};

export default controller;
