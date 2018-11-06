import {mapActions} from 'vuex';

const controller = {
  closePage() {
    this.$router.back();
  },
  ...mapActions([
    'selectDefaultCard'
  ])
};

export default controller;
