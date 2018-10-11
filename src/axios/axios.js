import axios from 'axios';
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

function errorState(response) {
  if (response && (response.status === 200 ||
      response.status === 304 ||
      response.status === 400)) {
    return response;
  } else {
  }
}

function successState(res) {
  if (res.data.errCode === '000002') {
  } else if (res.data.errCode !== '000002' &&
    res.data.errCode !== '000000') {
  }
}

const $http = (opts) => {
  const config = {
    method: opts.method || 'get',
    baseURL: '/api',
    url: opts.url,
    timeout: 10000,
    headers: opts.method === 'get' ? {
      'X-Requested-With': 'XMLHttpRequest',
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=UTF-8'
    } : {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  };

  const promise = new Promise(function (resolve, reject) {
    axios(config)
      .then((res) => {
        successState(res);
        resolve(res);
      })
      .catch((response) => {
        errorState(response);
        reject(response);
      });
  });
  return promise;
};

export default $http;
