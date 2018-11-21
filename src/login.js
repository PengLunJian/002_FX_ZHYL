export const jumpToWeChatUrl = (appId, scope) => {
  const ACCESS_URL = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' +
    appId + '&redirect_uri=' + encodeURIComponent('http://192.168.3.189:8080') +
    '&response_type=code&scope=snsapi_' + scope + '&state=123&' +
    'connect_redirect=123#wechat_redirect';
  window.location.replace(ACCESS_URL);
};

export const saveLocalStorage = (data) => {
  const {AccessToken, RefreshToken} = data;
  const accessToken = 'Bearer ' + AccessToken;
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', RefreshToken);
};
