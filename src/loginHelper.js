import apis from './apis';
import axios from './axios/axios';

export default class LoginHelper {
  constructor() {
    const args = arguments.length ? arguments[0] : arguments;
    this.code = args['code'] ? args['code'] : '';
    this.appId = args['appId'] ? args['appId'] : '';
    this.url = args['url'] ? args['url'] : window.location.href;
    this.finish = args['finish'] ? args['finish'] : function () {
    };

    this.selectDeviceId();
  }

  redirectUrl(scope) {
    const ACCESS_URL = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' +
      this.appId + '&redirect_uri=' + encodeURIComponent(this.url) +
      '&response_type=code&scope=snsapi_' + scope + '&state=STATE&' +
      'connect_redirect=123#wechat_redirect';
    window.location.href = ACCESS_URL;
  };

  querySearch(name) {
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
    const r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  }

  selectDeviceId() {
    this.code = this.querySearch('code');
    if (!this.code) {
      this.redirectUrl('base');
    } else {
      axios.post(apis.selectDeviceId)
        .then((res) => {
          const {data} = res;
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + data;
          this.selectBaseLogin();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  selectBaseLogin() {
    const params = {Value: this.code};
    axios.post(apis.selectBaseLogin, params)
      .then((res) => {
        const {data, success} = res;
        if (data && success) {
          this.setLocalStorage(data);
        } else {
          this.redirectUrl('userinfo');
          this.selectUserLogin();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  selectUserLogin() {
    const params = {Value: this.code};
    axios.post(apis.selectUserLogin, params)
      .then((res) => {
        const {data, success} = res;
        if (!data || !success) return;
        this.setLocalStorage(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  setLocalStorage(data) {
    const {AccessToken, RefreshToken} = data;
    localStorage.setItem('accessToken', AccessToken);
    localStorage.setItem('refreshToken', RefreshToken);
    axios.defaults.headers.common['Authorization'] = AccessToken;
    this.finish();
  }
};
