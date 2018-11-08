import apis from './apis';
import axios from './axios/axios';

export default class LoginHelper {
  constructor() {
    this.apis = apis;
    this.deviceId = '';
    this.url = window.location.href;
    this.appId = 'wxe790a197b8d02b72';
    this.code = sessionStorage.getItem('code');

    this.init();
  }

  init() {
    this.getWeChatCode();
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

  querySearch(name) {
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
    const r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  }

  getWeChatCode() {
    if (!this.code) {
      const ACCESS_URL = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' +
        this.appId + '&redirect_uri=' + encodeURIComponent(this.url) +
        '&response_type=code&scope=snsapi_base&state=STATE&connect_redirect=123#wechat_redirect';
      window.location.href = ACCESS_URL;
      this.code = this.querySearch('code');
      sessionStorage.setItem('code', this.code);
    }
    alert(this.querySearch('code'));
  };

  selectDeviceId() {
    return new Promise((resolve, reject) => {
      axios.post(this.apis.selectDeviceId)
        .then((res) => {
          const {data} = res;
          this.deviceId = data;
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
