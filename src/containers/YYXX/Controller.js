import {mapActions} from 'vuex';
import {
  handlerWXConfig,
  handlerChooseWXPay
} from '../../jssdk/WXHelper';

const controller = {
  handlerSubmit() {
    this.exeSelectJSSDKConfig();
  },
  exeSelectJSSDKConfig() {
    const data = {
      url: window.location.href,
      appid: localStorage.getItem('WechatAppId'),
      access_token: localStorage.getItem('WechatAccessToken')
    };
    this.selectJSSDKConfig(data)
      .then((res) => {
        const {data, success} = res;
        if (data && success) {
          const jsApiList = ['chooseWXPay'];
          const config = Object.assign(data, {jsApiList: jsApiList});
          handlerWXConfig(config)
            .then(() => {
              this.exeSelectRegisterPay();
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  exeSelectRegisterPay() {
    const data = {
      isPre: '0',
      onlyNo: '000001'
    };
    this.selectRegisterPay(data)
      .then((res) => {
        const {data} = res;
        if (!data) return;
        const jsApiList = ['chooseWXPay'];
        const config = Object.assign(data, {jsApiList: jsApiList});
        handlerChooseWXPay(config)
          .then(() => {
            console.log('支付成功');
          });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  ...mapActions([
    'selectJSSDKConfig',
    'selectRegisterPay'
  ])
};

export default controller;
