import apis from '../../apis';
import Swiper from 'swiper';
import {
  clearPaymentRecordsFun,
  selectPaymentRecordsFun
} from '../../vuex/actions';

const controller = {
  initSwiper() {
    const _this = this;
    if (!this.swiper) {
      this.swiper = new Swiper('.swiper-container', {
        on: {
          slideChangeTransitionStart() {
            const index = this.activeIndex;
            _this.$emit('update:tabIndex', index);
          }
        }
      });
    }
    ;
  },
  init(mescroll) {
    this.mescroll = mescroll;
  },
  refresh() {
    if (this.timer) clearInterval(this.timer);
    this.timer = setTimeout(() => {
      this.ajaxRequestPaymentRecords(1);
    }, 500);
  },
  infinite() {
    if (this.timer) clearInterval(this.timer);
    this.timer = setTimeout(() => {
      const tabIndex = this.tabIndex;
      let pageCode = this.$store.state.PAYMENT_RECORD.data[tabIndex].pageCode;
      pageCode++;
      this.ajaxRequestPaymentRecords(pageCode);
    }, 500);
  },
  ajaxRequestPaymentRecords(pageCode) {
    const tabIndex = this.tabIndex;
    const params = {pageIndex: pageCode, payStatus: tabIndex};
    this.$axios.post(apis.selectPaymentRecord, params)
      .then((res) => {
        this.$vux.loading.hide();
        const {data} = res;
        if (pageCode === 1) {
          this.$store.dispatch(clearPaymentRecordsFun({payStatus: tabIndex}));
          if (!data.length) {
            if (tabIndex === 0) {
              this.isNoData1 = true;
            } else {
              this.isNoData2 = true;
            }
            return;
          }
        }
        const hasNext = data.length === 10 ? true : false;
        const newData = {list: data, payStatus: tabIndex, hasNext: hasNext, pageCode: pageCode};
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
