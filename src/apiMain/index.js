const apiMain = {
  baseUrl: '/api',
  default: {
    method: 'POST',
    timeout: 10000,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
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
    method: 'GET',
    params: {
      pageSize: 10,
      pageIndex: 1
    }
  }
};

export default apiMain;
