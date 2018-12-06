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
      alert('config=success');
      resolve();
    });
    wx.error((res) => {
      alert('config=error');
      reject(res);
    });
  });
};

export const handlerCheckJsApi = (config) => {
  return new Promise((resolve) => {
    wx.checkJsApi({
      jsApiList: config.jsApiList,
      success: (res) => {
        alert('jsApiList=success+res=' + res);
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
        alert('chooseWXPay=success+res=' + res);
        resolve(res);
      }
    });
  });
};
