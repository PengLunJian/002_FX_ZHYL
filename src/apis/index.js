const apis = {
  baseUrl: 'http://192.168.1.5:8080',
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
    url: '/PatientCard3/v1/patientCard/getDefaultCardDetail'
  },
  selectAllCards: {
    url: '/PatientCard3/v1/patientCard/getCardList',
    params: {
      value: ''
    }
  },
  updateDefault: {
    url: '/PatientCard3/v1/patientCard/setDefault',
    params: {
      value: ''
    }
  },
  insertBindCard: {
    url: '/PatientCard3/v1/patientCard/bind',
    params: {
      name: '',
      idCardNo: '',
      sex: '',
      nation: '',
      releation: '',
      phone: ''
    }
  },
  deleteUnbindCard: {
    url: '/PatientCard3/v1/patientCard/unbind',
    params: {
      value: ''
    }
  },
  selectRegisterList: {
    url: '/WenRongBusiness/v1/personal/regist/regist',
    params: {
      pageIndex: 1,
      pageSize: 10
    }
  },
  selectSubscribeList: {
    url: '/WenRongBusiness/v1/personal/appoint/regist',
    params: {
      pageIndex: 1,
      pageSize: 10
    }
  },
  selectPaymentRecord: {
    url: '/WenRongBusiness/v1/personal/pay/record',
    params: {
      payStatus: 0,
      pageIndex: 1,
      pageSize: 10
    }
  }
};

export default apis;
