import axios from 'axios';

axios.defaults.timeout = 10000;
// axios.defaults.baseURL = 'http://118.31.65.217';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.interceptors.request.use(config => {
  config = getConfig(config);
  return config;
}, error => {
  return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  return response.data;
}, error => {
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
