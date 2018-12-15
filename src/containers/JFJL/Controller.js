import Swiper from 'swiper';
import {mapActions} from 'vuex';

const controller = {
  initSwiper() {
    const _this = this;
    this.swiper = new Swiper('.swiper-container', {
      on: {
        slideChange() {
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
      this.pageCode = 1;
      this.exeSelectPaymentRecords();
    }, 500);
  },
  infinite() {
    if (this.timer) clearInterval(this.timer);
    this.timer = setTimeout(() => {
      this.pageCode++;
      this.exeSelectPaymentRecords();
    }, 500);
  },
  exeSelectPaymentRecords() {
    const data = {
      pageIndex: this.pageCode,
      payStatus: this.tabIndex
    };
    this.selectNoPayedRecords(data)
      .then((res) => {
        res = res || [];
        this.$vux.loading.hide();
        const hasNext = res.length === 10 ? true : false;
        this.hasNexts[this.tabIndex] = hasNext;
        if (this.mescrolls[this.tabIndex]) {
          this.mescrolls[this.tabIndex].endSuccess(10, hasNext);
        }
      });
    },
  ...mapActions([
    'selectNoPayedRecords'
  ])
};

export default controller;
