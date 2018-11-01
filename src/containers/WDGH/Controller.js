import apis from '../../apis';
import {
  clearRegisterListFun,
  selectRegisterListFun
} from '../../vuex/actions';

const controller = {
  init(mescroll) {
    this.mescroll = mescroll;
  },
  refresh() {
    if (this.timer) clearInterval(this.timer);
    this.timer = setTimeout(() => {
      this.pageCode = 1;
      this.ajaxRequestRegisterList();
    }, 500);
  },
  infinite() {
    if (this.timer) clearInterval(this.timer);
    this.timer = setTimeout(() => {
      this.pageCode++;
      this.ajaxRequestRegisterList();
    }, 500);
  },
  ajaxRequestRegisterList() {
    this.$axios.post(apis.selectRegisterList,
      {pageIndex: this.pageCode})
      .then((res) => {
        this.$vux.loading.hide();
        this.$store.dispatch(clearRegisterListFun(this.pageCode));
        const data = res.data;
        const hasNext = data.length ? true : false;
        this.$store.dispatch(selectRegisterListFun(data));
        this.mescroll.endSuccess(10, hasNext);
      })
      .catch((err) => {
        this.$vux.loading.hide();
        console.log(err);
      });
  }
};

export default controller;
