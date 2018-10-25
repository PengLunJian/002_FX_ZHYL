import axios from 'axios';
import apis from '../apis';

axios.interceptors.request.use(config => {
  return config;
}, error => {
  return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  return response.data;
}, error => {
  handlerError(error);
  return Promise.resolve(error.response);
});
/**
 *
 * @param error
 */
const handlerError = (error) => {
  if (error && error.response) {
    console.log(`连接错误${error.response.status}`);
  } else {
    console.log('服务器连接失败');
  }
};

/**
 *
 * @param opts
 * @param data
 * @returns {{method: string, timeout: number, headers: {"X-Requested-With": string, "Content-Type": string}}|apiMain.default|{method, timeout, headers}}
 */
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

/**
 *
 * @param opts
 * @param data
 * @returns {Promise<any>}
 */
const $axios = (opts, data) => {
  const config = getConfig(opts, data);
  return new Promise((resolve, reject) => {
    axios(config)
      .then((response) => {
        resolve(response);
      })
      .catch((response) => {
        reject(response);
      });
  });
};

export default $axios;
