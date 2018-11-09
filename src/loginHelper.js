import apis from './apis';
import axios from './axios/axios';

export default class LoginHelper {
  constructor() {
    this.appId = arguments[0].appId;
    this.url = window.location.href;
    this.code = arguments[0].code || '';
    this.finish = arguments[0].finish || '';
    this.initLoginHelper();
  }

  initLoginHelper() {
    this.getWeChatCode('base');
    this.selectDeviceId()
      .then((res) => {
        const {data} = res;
        if (!data || !this.code) return;
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + data;
        this.selectWechatCode()
          .then((res) => {
            const {data, success} = res;
            if (!data || !success) {
              this.code = '';
              this.getWeChatCode('userinfo');
              this.selectUserInfo();
            } else {
              const {AccessToken, RefreshToken} = data;
              sessionStorage.setItem('accessToken', AccessToken);
              sessionStorage.setItem('refreshToken', RefreshToken);
              axios.defaults.headers.common['Authorization'] = AccessToken;
              this.finish();
            }
          })
          .catch((err) => {
            console.log(err);
          });
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

  getWeChatCode(scope) {
    this.code = this.querySearch('code');
    this.code = scope === 'userinfo' ? '' : this.code;
    if (!this.code) {
      const ACCESS_URL = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' +
        this.appId + '&redirect_uri=' + encodeURIComponent(this.url) +
        '&response_type=code&scope=snsapi_' + scope + '&state=STATE&connect_redirect=123#wechat_redirect';
      window.location.href = ACCESS_URL;
    }
  };

  selectDeviceId() {
    return new Promise((resolve, reject) => {
      axios.post(apis.selectDeviceId)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  };

  selectWechatCode() {
    return new Promise((resolve, reject) => {
      const params = {Value: this.code};
      axios.post(apis.selectWechatCode, params)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  selectUserInfo() {
    return new Promise((resolve, reject) => {
      const params = {Value: this.code};
      axios.post(apis.selectUserInfo, params)
        .then((res) => {
          const {data, success} = res;
          if (!data || !success) return;
          const {AccessToken, RefreshToken} = data;
          sessionStorage.setItem('accessToken', AccessToken);
          sessionStorage.setItem('refreshToken', RefreshToken);
          axios.defaults.headers.common['Authorization'] = AccessToken;
          this.finish();
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
};
