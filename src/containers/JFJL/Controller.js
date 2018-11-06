import Swiper from 'swiper';
import {mapActions} from 'vuex';

const controller = {
  initSwiper() {
    const _this = this;
    this.swiper = new Swiper('.swiper-container', {
      on: {
        slideChangeTransitionStart() {
          const index = this.activeIndex;
          _this.$emit('update:tabIndex', index);
        }
      }
    });
  },
  initMescroll1(mescroll) {
    this.mescrolls[0] = mescroll;
  },
  initMescroll2(mescroll) {
    this.mescrolls[1] = mescroll;
  },
  refresh() {
    if (this.timer) clearInterval(this.timer);
    this.timer = setTimeout(() => {
      this.pageCode[this.tabIndex] = 1;
      this.exeSelectPaymentRecords();
    }, 500);
  },
  infinite() {
    if (this.timer) clearInterval(this.timer);
    this.timer = setTimeout(() => {
      this.pageCode[this.tabIndex]++;
      this.exeSelectPaymentRecords();
    }, 500);
  },
  exeSelectPaymentRecords() {
    const data = {
      pageIndex: this.pageCode[this.tabIndex],
      payStatus: this.tabIndex
    };
    switch (this.tabIndex) {
      case 0:
        this.selectIsPayedRecords(data)
          .then((res) => {
            this.$vux.loading.hide();
            if (data.pageIndex === 1 && (!res.length)) {
              this.isPayedNoData = true;
            }
            const hasNext = res.length === 10 ? true : false;
            this.hasNexts[this.tabIndex] = hasNext;
            this.mescrolls[this.tabIndex].endSuccess(10, hasNext);
          });
        break;
      case 1:
        this.selectNoPayedRecords(data)
          .then((res) => {
            this.$vux.loading.hide();
            if (data.pageIndex === 1 && (!res.length)) {
              this.noPayedNoData = true;
            }
            const hasNext = res.length === 10 ? true : false;
            this.hasNexts[this.tabIndex] = hasNext;
            this.mescrolls[this.tabIndex].endSuccess(10, hasNext);
          });
        break;
    }
  },
  ...mapActions([
    'selectIsPayedRecords',
    'selectNoPayedRecords'
  ])
};

export default controller;
