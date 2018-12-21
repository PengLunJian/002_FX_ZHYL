import {mapActions} from 'vuex';
import {
  handlerWXConfig,
  handlerCheckJsApi,
  handlerChooseWXPay
} from '../../jssdk/WXHelper';

const controller = {
  // init(mescroll) {
  //   this.mescroll = mescroll;
  // },
  // refresh() {
  //   this.exeSelectPaymentRecords();
  // },
  handleSubmit() {
    // this.exeSelectPayRegiter();
    handlerCheckJsApi(this.jsApiList)
      .then((res) => {
        console.log(res);
        this.exeSelectPayRegiter();
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
    const data = {id: this.id};
    this.selectPayRegiter(data)
      .then((res) => {
        res = res || {};
        const {data, success, status} = res;
        if (success) {
          console.log(data);
          if (!data) return;
          handlerChooseWXPay(data)
            .then((res) => {
              console.log(res);
              this.$router.back();
            });
        } else {
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
  exeSelectPaymentRecords() {
    this.selectNoPayedRecords()
      .then((res) => {
        console.log(res);
        const {data, success} = res;
        if (success && data) {
          this.clinicNo = data.id;
          this.$vux.loading.hide();
        }
      })
      .catch((err) => {
        console('err-no' + err);
      });
  },
  ...mapActions([
    'selectNoPayedRecords',
    'selectPayRegiter',
    'selectJSSDKConfig'
  ])
};

export default controller;
