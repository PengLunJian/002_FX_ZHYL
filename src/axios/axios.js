import Vue from 'vue';
import axios from 'axios';
import apis from '../apis';

axios.defaults.timeout = apis.default.timeout;
axios.defaults.baseURL = apis.default.baseUrl;
axios.defaults.headers = apis.default.headers;

axios.interceptors.request.use(config => {
  const AccessToken = sessionStorage.getItem('AccessToken');
  if (AccessToken) {
    config.headers = {
      'Authorization': AccessToken
    };
  }
  Vue.$vux.loading.show({
    text: '加载中...'
  });
  config = getConfig(config);
  return config;
}, error => {
  Vue.$vux.loading.hide();
  return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  // setTimeout(() => {
    Vue.$vux.loading.hide();
    return response.data;
  // }, 2000);
}, error => {
  // setTimeout(() => {
    Vue.$vux.loading.hide();
    return Promise.resolve(error.response);
  // }, 2000);
});

const getConfig = (config) => {
  const {data} = config;
  const opts = config.url;
  if (data) {
    const {url, params} = opts;
    config.url = url;
    config.data = Object.assign(params, data);
  } else {
    const {url} = opts;
    config.url = url;
  }
  return config;
};

export default axios;
