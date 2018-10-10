import wx from 'weixin-js-sdk';

const WX_JS_SDK = {
  getConfig: () => {
    return {
      debug: true,
      appId: 'wxe790a197b8d02b72',
      timestamp: new Date().getTime(),
      nonceStr: '',
      signature: '',
      jsApiList: ['chooseImage']
    };
  },
  config: () => {
    wx.config({
      debug: true,
      appId: 'wx78b286236b6b10ad',
      timestamp: new Date().getTime(),
      nonceStr: 'peng',
      signature: '',
      jsApiList: ['chooseImage']
    });
  },
  ready: () => {
    wx.ready(function () {
      // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
    });
  },
  error: () => {
    wx.error(function (res) {
      // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
    });
  },
  chooseImage: () => {
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        let localIds = res.localIds;
        console.log(localIds);
      }
    });
  }
};

export default WX_JS_SDK;
