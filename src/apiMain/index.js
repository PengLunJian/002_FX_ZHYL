const apiMain = {
  baseUrl: '/api',
  default: {
    method: 'post',
    timeout: 10000,
    responseType: 'JSON',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=UTF-8'
    }
  },
  login: {
    url: '/login',
    params: {
      username: 'peng'
    }
  },
  wdyy: {
    url: '/wdyy',
    params: {
      pageSize: 10,
      pageIndex: 1
    }
  }
};

export default apiMain;
