import apis from '../../apis';
import {
  clearPaymentRecordsFun,
  selectPaymentRecordsFun
} from '../../vuex/actions';

const controller = {
  init(mescroll) {
    this.mescroll = mescroll;
  },
  refresh() {
    if (this.timer) clearInterval(this.timer);
    this.timer = setTimeout(() => {
      this.pageCode = 1;
      this.ajaxRequestPaymentRecords();
    }, 500);
  },
  infinite() {
    if (this.timer) clearInterval(this.timer);
    this.timer = setTimeout(() => {
      this.pageCode++;
      this.ajaxRequestPaymentRecords();
    }, 500);
  },
  ajaxRequestPaymentRecords() {
    const params = {pageIndex: this.pageCode, payStatus: this.tabIndex};
    this.$axios.post(apis.selectPaymentRecord, params)
      .then((res) => {
        this.$vux.loading.hide();
        this.$store.dispatch(clearPaymentRecordsFun(params));
        const {data} = res;
        const hasNext = data.length === 10 ? true : false;
        const newData = Object.assign({list: data}, {payStatus: this.tabIndex});
        this.$store.dispatch(selectPaymentRecordsFun(newData));
        this.mescroll.endSuccess(10, hasNext);
      })
      .catch((err) => {
        this.$vux.loading.hide();
        console.log(err);
      });
  }
};

export default controller;
