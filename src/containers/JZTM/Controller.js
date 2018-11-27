import {mapActions} from 'vuex';
import JsBarcode from 'jsbarcode';

const controller = {
  closePage() {
    this.$router.back();
  },
  exeSelectDefaultCard() {
    this.selectDefaultCard()
      .then((res) => {
        const {data} = res || {};
        const {patientCardNo} = data || '';
        JsBarcode(this.$refs.jsbarcode, patientCardNo, {
          displayValue: false
        });
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
