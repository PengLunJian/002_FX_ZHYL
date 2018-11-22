import {mapActions} from 'vuex';
// import {
//   handlerChooseWXPay
// } from '../../jssdk/WXHelper';

const controller = {
  handlerSubmit() {
    this.exeSelectWechatToken();
    // this.exeSelectJsApiTicket();
    // wx.config({
    //   debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    //   appId: 'wxe790a197b8d02b72', // 必填，公众号的唯一标识
    //   timestamp: Date.parse(new Date()).toString().substr(0, 10), // 必填，生成签名的时间戳
    //   nonceStr: '2757377998643873166999407649320', // 必填，生成签名的随机串
    //   signature: '88888', // 必填，调用js签名， 33103A70B506EB0A711E8F9C36F3FEB6
    //   jsApiList: ['chooseImage'] // 必填，需要使用的JS接口列表，这里只写支付的
    // });
    // wx.ready(() => {
    //   wx.chooseImage({
    //     count: 1, // 默认9
    //     sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
    //     sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    //     success: (res) => {
    //       const localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
    //       alert(localIds);
    //     }
    //   });
    // });
    // wx.error((err) => {
    //   alert(err);
    // });
  },
  exeSelectWechatToken() {
    this.selectWechatToken()
      .then((res) => {
        const {data, success} = res;
        if (data && success) {
          const params = {
            access_token: data,
            type: 'jsapi'
          };
          this.selectJsApiTicket(params);
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
    'selectJsApiTicket',
    'selectWechatToken',
    'selectRegisterPay'
  ])
};

export default controller;
