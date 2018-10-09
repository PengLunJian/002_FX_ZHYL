import wx from 'weixin-js-sdk';

const WX_JS_SDK = {
  getConfig: () => {
    return {
      debug: true,
      appId: 'wx78b286236b6b10ad',
      timestamp: new Date().getTime(),
      nonceStr: '',
      signature: '',
      jsApiList: []
    };
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
