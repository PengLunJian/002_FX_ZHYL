const apiMain = {
  baseUrl: 'http://118.31.65.217',
  default: {
    method: 'POST',
    timeout: 5000,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json; charset=UTF-8'
    }
  },
  getDeviceId: {
    url: '/UserCenter/v1/refresh/did',
    params: {}
  },
  wdyy: {
    url: '/wdyy',
    method: 'GET',
    params: {
      pageSize: 10,
      pageCode: 1
    }
  }
};

export default apiMain;
