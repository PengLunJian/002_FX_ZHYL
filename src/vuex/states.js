const states = {
  DEVICEID: {
    isLoading: false,
    isSuccess: false,
    isFailure: false,
    data: null
  },
  GRANT_LOGIN: {
    isLoading: false,
    isSuccess: false,
    isFailure: false,
    data: null
  },
  WECHAT_TOKEN: {
    isLoading: false,
    isSuccess: false,
    isFailure: false,
    data: null
  },
  DEFAULT_CARD: {
    isLoading: false,
    isSuccess: false,
    isFailure: false,
    data: {
      idCardNo: '',
      isDefault: '',
      linkmanAddr: '',
      linkmanName: '',
      linkmanTel: '',
      name: '',
      nation: '',
      patientCardNo: '',
      phone: '',
      qrcodeUrl: '',
      releation: '',
      sex: ''
    }
  },
  VISITOR_LIST: {
    isLoading: false,
    isSuccess: false,
    isFailure: false,
    data: []
  },
  REGISTER_LIST: {
    isLoading: false,
    isSuccess: false,
    isFailure: false,
    data: []
  },
  SUBSCRIBE_LIST: {
    isLoading: false,
    isSuccess: false,
    isFailure: false,
    data: []
  },
  ISPAYED_RECORDS: {
    isLoading: false,
    isSuccess: false,
    isFailure: false,
    data: []
  },
  NOPAYED_RECORDS: {
    isLoading: false,
    isSuccess: false,
    isFailure: false,
    data: []
  },
  DOCTOR_LIST: {
    isLoading: false,
    isSuccess: false,
    isFailure: false,
    data: []
  },
  REGISTER_PAY: {
    isLoading: false,
    isSuccess: false,
    isFailure: false,
    data: {
      appId: '',
      nonceStr: '',
      package: '',
      paySign: '',
      signType: '',
      timeStamp: ''
    }
  }
};

export default states;
