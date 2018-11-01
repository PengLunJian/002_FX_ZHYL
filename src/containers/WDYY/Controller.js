import apis from '../../apis';
import {
  clearSubscribeListFun,
  selectSubscribeListFun
} from '../../vuex/actions';

const controller = {
  init(mescroll) {
    this.mescroll = mescroll;
  },
  refresh() {
    if (this.timer) clearInterval(this.timer);
    this.timer = setTimeout(() => {
      this.pageCode = 1;
      this.ajaxRequestSubscribeList();
    }, 500);
  },
  infinite() {
    if (this.timer) clearInterval(this.timer);
    this.timer = setTimeout(() => {
      this.pageCode++;
      this.ajaxRequestSubscribeList();
    }, 500);
  },
  ajaxRequestSubscribeList() {
    this.$axios.post(apis.selectSubscribeList,
      {pageIndex: this.pageCode})
      .then((res) => {
        this.$vux.loading.hide();
        this.$store.dispatch(clearSubscribeListFun(this.pageCode));
        const data = res.data;
        const hasNext = data.length ? true : false;
        this.$store.dispatch(selectSubscribeListFun(data));
        this.mescroll.endSuccess(10, hasNext);
      })
      .catch((err) => {
        this.$vux.loading.hide();
        console.log(err);
      });
  }
};

export default controller;
