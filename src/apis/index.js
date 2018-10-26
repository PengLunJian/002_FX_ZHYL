const apiMain = {
  baseUrl: 'http://118.31.65.217',
  default: {
    method: 'POST',
    timeout: 20000,
    headers: {
      'Authorization': 'Bearer *CKS8PQU3_APP_LINUX',
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json; charset=UTF-8'
    }
  },
  selectDeviceId: {
    url: '/UserCenter/v1/refresh/did'
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
  selectDefaultCard: {
    url: '/UserCard3/v1/patientCard/getDefaultCardDetail'
  },
  selectAllCards: {
    url: 'UserCard3/v1/patientCard/getAll',
    params: {
      Page: 1,
      PageSize: 10,
      Order: 'Order',
      Desc: false
    }
  }
};

export default apiMain;
