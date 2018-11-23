export const jumpToWeChatUrl = (appId, scope) => {
  const ACCESS_URL = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' +
    appId + '&redirect_uri=' + encodeURIComponent(window.location.href) +
    '&response_type=code&scope=snsapi_' + scope + '&state=123&' +
    'connect_redirect=123#wechat_redirect';
  window.location.replace(ACCESS_URL);
};

export const saveLocalStorage = (data) => {
  const {
    WechatAppId,
    AccessToken,
    RefreshToken,
    WechatAccessToken,
    WechatRefreshToken
  } = data;
  localStorage.setItem('WechatAppId', WechatAppId);
  localStorage.setItem('AccessToken', 'Bearer ' + AccessToken);
  localStorage.setItem('RefreshToken', RefreshToken);
  localStorage.setItem('WechatAccessToken', WechatAccessToken);
  localStorage.setItem('WechatRefreshToken', WechatRefreshToken);
};
