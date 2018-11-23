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
    url: '/UserCenter/v1/refresh/did'
  },
  selectGrantLogin: {
    url: '/UserCenter/v1/account/fillUserInfoWithWechatCode',
    params: {
      Value: ''
    }
  },
  selectWechatToken: {
    url: 'WechatApi/v1/wechat/getAccesstoken'
  },
  selectJSSDKConfig: {
    url: 'http://22uj113640.iok.la/fx-pay-web-gateway/sign/getSignature',
    params: {
      url: '',
      appid: '',
      access_token: ''
    }
  },
  selectDefaultCard: {
    url: '/PatientCard/v1/patientCard/getDefaultCardDetail'
  },
  insertVisitorList: {
    url: '/PatientCard/v1/patientCard/bind',
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
    url: '/PatientCard/v1/patientCard/unbind',
    params: {
      value: ''
    }
  },
  updateVisitorList: {
    url: '/PatientCard/v1/patientCard/setDefault',
    params: {
      value: ''
    }
  },
  selectVisitorList: {
    url: '/PatientCard/v1/patientCard/getCardList',
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
    url: '/WenRongBusiness/v1/personal/appointreg/list',
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
  },
  selectDoctorList: {
    url: '/WenRongBusiness/v1/regist/schedul/doctor',
    params: {
      isPre: 0,
      date: 0,
      regType: '',
      deptCode: '',
      pageIndex: 1,
      pageSize: 10,
      sort: '1'
    }
  },
  selectRegisterPay: {
    url: 'WenRongBusiness/v1/register/pay/register',
    params: {
      payWayCode: '1', // 1、微信支付
      isPre: '0',
      onlyNo: '',
      openId: 'oM5On1EWYcDJaFuqUBc0NHAGjSsU'
    }
  },
  selectDepartment: {
    url: '/WenRongBusiness/v1/regist/schedul/dept',
    params: {
      isPre: 0, // 0 当日挂号 1 预约挂号
      regType: 'PT' // PT 普通门诊 ZJ专家门诊
    }
  }
};

export default apis;
