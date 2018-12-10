import {mapActions} from 'vuex';

const controller = {
  closePage() {
    this.$router.back();
  },
  exeSelectDefaultCard() {
    this.selectDefaultCard()
      .then((res) => {
      })
      .catch((err) => {
        console.log(err);
      });
  },
  ...mapActions([
    'selectDefaultCard'
  ])
};

export default controller;
