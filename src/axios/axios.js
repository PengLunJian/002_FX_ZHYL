import Vue from 'vue';
import axios from 'axios';
import apis from '../apiMain';
// 请求拦截器可添加Loading
axios.interceptors.request.use(config => {
  console.log('resquest');
  Vue.$vux.loading.show({
    text: '加载中...'
  });
  return config;
}, error => {
  return Promise.reject(error);
});
// 响应拦截器根据状态码添加无数据等
axios.interceptors.response.use(response => {
  Vue.$vux.loading.hide();
  console.log('response');
  return response;
}, error => {
  return Promise.resolve(error.response);
});

const error = (response) => {
  if (response && (response.status === 200 ||
      response.status === 304 ||
      response.status === 400)) {
    return response;
  } else {
  }
};

const success = (res) => {
  if (res.data.errCode === '000002') {
  } else if (res.data.errCode !== '000002' &&
    res.data.errCode !== '000000') {
  }
};

// const getToken = () => {
//   const token = sessionStorage.getItem('token');
//   return token;
// };

const getConfig = (opts, data) => {
  const config = {};
  config.url = apis.baseUrl + opts.url;
  if (opts.method && opts.method === 'GET') {
    Object.assign(opts.params, data);
    Object.assign(apis.default, opts);
  } else {
    Object.assign(opts.params, data);
    Object.assign(apis.default, {data: opts.params});
  }
  Object.assign(apis.default, config);
  return apis.default;
};

const $axios = (opts, data) => {
  const config = getConfig(opts, data);
  return new Promise((resolve, reject) => {
    axios(config)
      .then((response) => {
        success(response);
        resolve(response);
      })
      .catch((response) => {
        error(response);
        reject(response);
      });
  });
};

export default $axios;
