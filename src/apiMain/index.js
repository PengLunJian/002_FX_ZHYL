const apiMain = {
  baseUrl: 'http://118.31.65.217',
  default: {
    method: 'POST',
    timeout: 5000,
    headers: {
      'Authorization': 'Bearer *CKS8PQU3_APP_LINUX',
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json; charset=UTF-8'
    }
  },
  selectDeviceId: {
    url: '/UserCenter/v1/refresh/did',
    params: {}
  },
  insertCollection: {
    url: '/Collection/v1/collections/create',
    params: {
      SCLX: 0,
      BH: '',
      MC: ''
    }
  },
  selectCollection: {
    url: '/Collection/v1/collections/page',
    params: {
      SCLX: 0,
      pageIndex: 1,
      pageSize: 10
    }
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
