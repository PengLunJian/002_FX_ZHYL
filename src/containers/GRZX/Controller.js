import {mapActions} from 'vuex';

const controller = {
  exeSelectDefaultCard() {
    this.selectDefaultCard();
  },
  notAvailable() {
    this.$vux.toast.show({
      type: 'text',
      text: '敬请期待',
      position: 'bottom'
    });
  },
  ...mapActions([
    'selectDefaultCard'
  ])
};

export default controller;
