import wx from 'weixin-js-sdk';

export const handlerWXConfig = (config) => {
  return new Promise((resolve, reject) => {
    wx.config({
      debug: true,
      appId: config.appId,
      timestamp: config.timeStamp,
      nonceStr: config.nonceStr,
      signature: config.paySign,
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
