class WeChartHelper {
  constructor() {
    this.code = '';
    this.href = window.location.href;
    this.appId = 'wx2749a85ddd356a25';
  };

  getAppId = () => {
    return this.appId;
  }

  getHref = () => {
    return this.href;
  }

  requestOpenId = () => {
    if (!this.code) {
      window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' +
        this.getAppId() + '&redirect_uri=' + encodeURIComponent(this.getHref()) +
        '&respones_type=code&scope=snsapi_base&state=123#wechat_redirect';
    } else {
      this.getOpenId(this.code);
    }
  }
}

export default WeChartHelper;
