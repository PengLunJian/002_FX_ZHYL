const apis = {
  default: {
    baseUrl: 'http://192.168.1.196',
    method: 'POST',
    timeout: 20000,
    headers: {
      'Authorization': '',
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
      value: ''
    }
  },
  selectWechatToken: {
    url: 'WechatApi/v1/wechat/getAccesstoken'
  },
  selectJSSDKConfig: {
    url: 'WechatApi/v1/wechat/app/generateJsSdkConfig',
    params: {
      value: ''
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
    url: '/WenRongBusiness/v1/personal/regist/list',
    params: {
      pageIndex: 1,
      pageSize: 10
    }
  },
  deleteRegisterList: {
    url: '/WenRongBusiness/v1/regist/regist/cancel',
    params: {
      clinicNo: ''
    }
  },
  // 预约取号
  insertDoRegister: {
    url: '/WenRongBusiness/v1/personal/pre/doregister',
    params: {
      id: ''
    }
  },
  selectReportList: {
    url: '/WenRongBusiness/v1/personal/inspectionreport/detail',
    params: {
      queryId: ''
    }
  },
  selectSubscribeList: {
    url: '/WenRongBusiness/v1/personal/appointreg/list',
    params: {
      pageIndex: 1,
      pageSize: 10
    }
  },
  deleteSubscribeList: {
    url: '/WenRongBusiness/v1/regist/appoint/cancel',
    params: {
      subscribeId: ''
    }
  },
  // 查询已缴费记录
  selectPaidList: {
    url: 'WenRongBusiness/v1/personal/pay/complete'
  },
  // 查询未交费记录
  selectUnpaidList: {
    url: 'WenRongBusiness/v1/personal/wait/pay'
  },
  // 代缴费去支付
  selectPayRegiter: {
    url: 'WenRongBusiness/v1/register/pay/register',
    params: {
      id: ''
    }
  },
  // 查找缴费记录-旧接口，暂用，新接口无数据
  selectPaymentRecord: {
    url: '/WenRongBusiness/v1/personal/pay/record',
    params: {
      payStatus: 0,
      pageIndex: 1,
      pageSize: 10
    }
  },
  selectDoctorList: {
    url: '/WenRongBusiness/v1/regist/doctor/list',
    params: {
      isPre: 0,
      regType: 'ZJ',
      deptCode: '',
      sort: '1'
    }
  },
  selectDoctorDetail: {
    url: '/WenRongBusiness/v1/regist/doctor/detail',
    params: {
      isPre: 0,
      regType: 'ZJ',
      deptCode: '',
      doctCode: ''
    }
  },
  selectRegisterPay: {
    url: 'WenRongBusiness/v1/register/pay/register',
    params: {
      payWayCode: '1', // 1、微信支付
      isPre: '0',
      onlyNo: ''
    }
  },
  selectDepartment: {
    url: '/WenRongBusiness/v1/regist/schedul/dept',
    params: {
      isPre: 0, // 0 当日挂号 1 预约挂号
      regType: 'ZJ' // PT 普通门诊 ZJ专家门诊
    }
  },
  selectSubDepartment: {
    url: '/WenRongBusiness/v1/regist/dept/subgrade',
    params: {
      deptCode: ''
    }
  },
  selectDepartmentDetail: {
    url: '/WenRongBusiness/v1/regist/dept/detail',
    params: {
      isPre: '',
      deptCode: ''
    }
  },
  selectAppointmentCreate: {
    url: '/WenRongBusiness/v1/regist/appointment/create',
    params: {
      classId: '',
      deptCode: '',
      isExpert: '',
      preTime: '',
      clinicFee: '',
      subSource: '',
      doctCode: ''
    }
  },
  selectTodayCreate: {
    url: '/WenRongBusiness/v1/regist/regist/create',
    params: {
      classId: '',
      deptCode: '',
      doctCode: '',
      regLevel: '',
      noonCode: '',
      regType: '',
      regDate: '',
      regTime: '',
      clinicFee: ''
    }
  },
  // 新增/修改健康档案
  insertHealthList: {
    url: '/WenRongBusiness/v1/personal/health/create',
    params: {
      id: 0, // 0为新增，其他为修改
      cardNo: '',
      height: '',
      weight: '',
      bloodType: '',
      smoking: '', // 1是无，2抽烟
      drink: '' // 1是无，2喝酒
    }
  },
  selectHealthList: {
    url: '/WenRongBusiness/v1/personal/health/query',
    params: {}
  },
  selectMessageList: {
    url: 'PatientMessage/v1/msg/list'
  }
};

export default apis;
