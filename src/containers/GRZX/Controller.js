import {mapActions} from 'vuex';

const controller = {
  exeSelectDefaultCard() {
    this.selectDefaultCard();
  },
  ...mapActions([
    'selectDefaultCard'
  ])
};

export default controller;
