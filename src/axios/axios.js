import Vue from 'vue';
import axios from 'axios';

axios.defaults.timeout = 10000;
// axios.defaults.baseURL = 'http://192.168.1.196';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Authorization'] = localStorage.getItem('accessToken');

axios.interceptors.request.use(config => {
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
  Vue.$vux.loading.hide();
  return response.data;
}, error => {
  Vue.$vux.loading.hide();
  return Promise.resolve(error.response);
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
