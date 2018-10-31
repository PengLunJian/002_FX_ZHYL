import apis from '../../apis';
import {
  updateDefaultCardFun,
  clearVisitorListData,
  deleteVisitorListFun,
  updateVisitorListFun,
  selectVisitorListFun
} from '../../vuex/actions';

const controller = {
  refresh() {
    if (this.timer) clearInterval(this.timer);
    this.timer = setTimeout(() => {
      this.pageCode = 1;
      this.ajaxRequestSelectVisitor();
    }, 500);
  },
  infinite() {
    if (this.timer) clearInterval(this.timer);
    this.timer = setTimeout(() => {
      this.pageCode++;
      this.ajaxRequestSelectVisitor();
    }, 500);
  },
  init(mescroll) {
    this.mescroll = mescroll;
  },
  insertSuffer() {
    this.$router.push({
      path: this.$routes.KPBL.path
    });
  },
  ajaxRequestSelectDefault() {
    this.$axios.post(apis.selectDefaultCard)
      .then((res) => {
        const {data} = res;
        this.$store.dispatch(updateDefaultCardFun(data));
        this.$store.dispatch(updateVisitorListFun(data.patientCardNo));
      })
      .catch((err) => {
        console.log(err);
      });
  },
  ajaxRequestSelectVisitor() {
    this.$axios.post(apis.selectAllCards, {value: this.pageCode})
      .then((res) => {
        this.$vux.loading.hide();
        this.$store.dispatch(clearVisitorListData(this.pageCode));
        const data = res.data.rows;
        const hasNext = data.length ? true : false;
        this.$store.dispatch(selectVisitorListFun(data));
        this.mescroll.endSuccess(10, hasNext);
      })
      .catch((err) => {
        this.$vux.loading.hide();
        console.log(err);
      });
  },
  ajaxRequestDeleteVisitor(patientCardNo) {
    this.$axios.post(apis.deleteUnbindCard, {Value: patientCardNo})
      .then((res) => {
        this.$vux.toast.show({
          text: '解绑成功'
        });
        this.$store.dispatch(deleteVisitorListFun(patientCardNo))
          .then(() => {
            if (patientCardNo === this.CARD_NO && this.CARD_NO) {
              this.ajaxRequestSelectDefault();
            }
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  ajaxRequestUpdateVisitor(patientCardNo) {
    this.$axios.post(apis.updateDefault, {Value: patientCardNo})
      .then((res) => {
        const {data} = res;
        this.$vux.toast.show({
          text: '设置成功'
        });
        this.$store.dispatch(updateVisitorListFun(patientCardNo));
        this.$store.dispatch(updateDefaultCardFun(data));
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export default controller;
