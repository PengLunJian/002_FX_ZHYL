import apis from './apis';
import axios from './axios/axios';

export default class LoginHelper {
  constructor() {
    this.apis = apis;
    this.account = {};
    this.url = window.location.href;
    this.appId = 'wxe790a197b8d02b72';

    this.init();
  }

  init() {
    this.getUrl();
    this.selectDeviceId()
      .then((res) => {
        this.selectWechatCode(res);
      })
      .then((res) => {
        this.selectUserInfo(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getUrl() {
    const ACCESS_URL = 'https://open.weixin.qq.com/connect/oauth2/authorize?' +
      'appid=' + this.appId +
      '&redirect_uri=' + encodeURIComponent(this.url) +
      '&response_type=code&scope=snsapi_base&state=STATE&connect_redirect=1#wechat_redirect';
    window.location.href = ACCESS_URL;

    // alert(window.location.search('code'));
  };

  selectDeviceId() {
    return new Promise((resolve, reject) => {
      axios.post(this.apis.selectDeviceId)
        .then((res) => {
          const {data} = res;
          this.account.deviceId = data;
          resolve(res);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  };

  selectUserInfo() {
    return new Promise((resolve, reject) => {
      axios.post(this.apis.selectUserInfo)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  selectWechatCode() {
    return new Promise((resolve, reject) => {
      axios.post(this.apis.selectWechatCode)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
};
