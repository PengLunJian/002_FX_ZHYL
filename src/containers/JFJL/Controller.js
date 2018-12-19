import Swiper from 'swiper';
import {mapActions} from 'vuex';
import {
  handlerWXConfig,
  handlerCheckJsApi,
  handlerChooseWXPay
} from '../../jssdk/WXHelper';

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
  handleSubmit() {
    // this.exeSelectPayRegiter();
    handlerCheckJsApi(this.jsApiList)
      .then((res) => {
        console.log(res);
        this.exeSelectPayRegiter();
      });
  },
  exeHandlePayAll() {
    const data = {};
    handlerChooseWXPay(data)
      .then((res) => {
        console.log(res);
        this.$router.back();
      });
  },
  exeSelectJSSDKConfig() {
    const data = {
      value: window.location.href.split('#')[0]
    };
    this.selectJSSDKConfig(data)
      .then((res) => {
        const {data, success} = res;
        if (success) {
          const config = Object.assign(data, this.jsApiList);
          handlerWXConfig(config);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  exeSelectPayRegiter() {
    const data = {id: this.clinicNo};
    this.selectPayRegiter(data)
      .then((res) => {
        res = res || {};
        const {data, success} = res;
        if (success) {
          console.log(data);
          if (!data) return;
          handlerChooseWXPay(data)
            .then((res) => {
              console.log(res);
              this.$router.back();
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  exeSelectPaymentRecords() {
    this.selectNoPayedRecords()
      .then((res) => {
        console.log(res);
        const {success, data} = res;
        if (success && !data) {
          this.clinicNo = res.id;
          this.$vux.loading.hide();
        }
      });
  },
  ...mapActions([
    'selectNoPayedRecords',
    'selectJSSDKConfig'
  ])
};

export default controller;
