const apis = {
  // baseUrl: 'http://192.168.1.5:8080',
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
    url: '/UserCenter100/v1/refresh/did'
  },
  selectAutoLogin: {
    url: '/UserCenter100/v1/account/loginByWechatCode',
    params: {
      Value: ''
    }
  },
  selectManuLogin: {
    url: '/UserCenter100/v1/account/fillUserInfoWithWechatCode',
    params: {
      Value: ''
    }
  },
  selectDefaultCard: {
    url: '/PatientCard100/v1/patientCard/getDefaultCardDetail'
  },
  insertVisitorList: {
    url: '/PatientCard100/v1/patientCard/bind',
    params: {
      name: '',
      idCardNo: '',
      sex: '',
      nation: '',
      releation: '',
      phone: ''
    }
  },
  deleteVisitorList: {
    url: '/PatientCard100/v1/patientCard/unbind',
    params: {
      value: ''
    }
  },
  updateVisitorList: {
    url: '/PatientCard100/v1/patientCard/setDefault',
    params: {
      value: ''
    }
  },
  selectVisitorList: {
    url: '/PatientCard100/v1/patientCard/getCardList',
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
