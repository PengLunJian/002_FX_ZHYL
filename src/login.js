/**
 *
 * @param appId
 */
export const linkToWXPage = () => {
  const appId = 'wxe790a197b8d02b72';
  const ACCESS_URL = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' +
    appId + '&redirect_uri=' + encodeURIComponent(window.location.href) +
    '&response_type=code&scope=snsapi_userinfo&state=123&' +
    'connect_redirect=123#wechat_redirect';
  window.location.replace(ACCESS_URL);
};
/**
 *
 * @param data
 */
export const saveLocalStorage = (data) => {
  const {
    WechatAppId,
    AccessToken,
    RefreshToken,
    WechatAccessToken,
    WechatRefreshToken
  } = data;
  sessionStorage.setItem('WechatAppId', WechatAppId);
  sessionStorage.setItem('AccessToken', 'Bearer ' + AccessToken);
  sessionStorage.setItem('RefreshToken', RefreshToken);
  sessionStorage.setItem('WechatAccessToken', WechatAccessToken);
  sessionStorage.setItem('WechatRefreshToken', WechatRefreshToken);
};
