import {mapActions} from 'vuex';
import {
  handlerChooseWXPay
} from '../../jssdk/WXHelper';

const controller = {
  handlerSubmit() {
    this.config = {
      'appId': 'wx9b4a02af4809f128',
      'timeStamp': '1542707922759',
      'nonceStr': '4726474617160224182229291098253',
      'package': 'prepay_id=wx201758413586523940babc284275572112',
      'signType': 'MD5',
      'paySign': '0F9EA28D570B489284F26BE65BCDFB31'
    };
    handlerChooseWXPay(this.config);
  },
  exeSelectRegisterPay() {
    // const data = {
    //   isPre: '0',
    //   onlyNo: '000001'
    // };
    // this.selectRegisterPay(data)
    //   .then((res) => {
    //     const {data} = res;
    //     if (!data) return;
    //     const jsApiList = ['chooseWXPay'];
    //     const config = Object.assign(data, {jsApiList: jsApiList});
    // handlerWXConfig(this.config)
    //   .then(() => {
    //     handlerCheckJsApi(config)
    //       .then((res) => {
    //         console.log(res);
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // // })
    // // .catch((err) => {
    // //   console.log(err);
    // // });
  },
  ...mapActions([
    'selectRegisterPay'
  ])
};

export default controller;
