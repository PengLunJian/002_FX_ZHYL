import axios from 'axios';

axios.defaults.timeout = 10000;
// axios.defaults.baseURL = 'http://192.168.1.5:8080';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.interceptors.request.use(config => {
  return config;
}, error => {
  return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  return response.data;
}, error => {
  return Promise.resolve(error.response);
});

export default axios;
