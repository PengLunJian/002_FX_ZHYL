import wx from 'weixin-js-sdk';

export const handlerWXConfig = (config) => {
  return new Promise((resolve, reject) => {
    wx.config({
      debug: true,
      appId: config.appId,
      timestamp: config.timestamp,
      nonceStr: config.nonceStr,
      signature: config.signature,
      jsApiList: config.jsApiList
    });
    wx.ready(() => {
      console.log('success');
      resolve();
    });
    wx.error((res) => {
      console.log('error');
      reject(res);
    });
  });
};

export const handlerCheckJsApi = (config) => {
  return new Promise((resolve) => {
    wx.checkJsApi({
      jsApiList: config.jsApiList,
      success: (res) => {
        console.log(res);
        resolve(res);
      }
    });
  });
};

export const handlerChooseWXPay = (config) => {
  return new Promise((resolve) => {
    wx.chooseWXPay({
      timestamp: config.timeStamp,
      nonceStr: config.nonceStr,
      package: config.package,
      signType: config.signType,
      paySign: config.paySign,
      success: (res) => {
        resolve(res);
      }
    });
  });
};

export const handlerChooseImage = (config) => {
  return new Promise((resolve) => {
    wx.chooseImage({
      count: config.count, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: (res) => {
        console.log(res);
        resolve(res);
      }
    });
  });
};
