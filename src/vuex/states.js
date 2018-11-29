const states = {
  JSAPI_TICKET: {
    isLoading: false,
    isSuccess: false,
    isFailure: false,
    data: null
  },
  DEVICEID: {
    isLoading: false,
    isSuccess: false,
    isFailure: false,
    data: {
      id: ''
    }
  },
  GRANT_LOGIN: {
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
  },
  REPORT_LIST: {
    isLoading: false,
    isSuccess: false,
    isFailure: false,
    data: {
      realName: '',
      sex: '',
      checkDate: '',
      type: '',
      testReport: [
        {
          sample: '',
          realResult: '',
          referprint: '',
          conclusion: '',
          itemName: ''
        }
      ]
    }
  },
  HEALTH_LIST: {
    isLoading: false,
    isSuccess: false,
    isFailure: false,
    data: {
      id: 0, // 0为新增，其他为修改
      cardNo: '',
      height: '',
      weight: '',
      bloodType: '',
      smoking: '', // 1是无，2抽烟
      drink: '' // 1是无，2喝酒
    }
  }
};

export default states;
