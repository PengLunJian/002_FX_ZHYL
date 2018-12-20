import {mapActions} from 'vuex';

const controller = {
  closePage() {
    this.$router.back();
  },
  exeSelectDefaultCard() {
    this.selectDefaultCard()
      .then((res) => {
        res = res || {};
        const {success, status} = res;
        if (!success) {
          this.$vux.toast.show({
            type: 'cancel',
            text: status.msg
          });
        }
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
