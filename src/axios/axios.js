import axios from 'axios';
import apis from '../apiMain';
// 请求拦截器可添加Loading
axios.interceptors.request.use(config => {
  console.log('request');
  return config;
}, error => {
  return Promise.reject(error);
});
// 响应拦截器根据状态码添加无数据等
axios.interceptors.response.use(response => {
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
  opts.url = apis.baseUrl + opts.url;

  console.log(apis.default);
  console.log(opts);
  console.log(data);
  console.log(Object.assign(opts.params, data));
  console.log(Object.assign(opts, apis.default));
  console.log(opts);
  if (opts.method && opts.method === 'POST') {

  }

  return config;
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
