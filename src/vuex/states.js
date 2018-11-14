const states = {
  DEVICEID: {
    isLoading: false,
    isSuccess: false,
    isFailure: false,
    data: {
      id: ''
    }
  },
  MANU_LOGIN: {
    isLoading: false,
    isSuccess: false,
    isFailure: false,
    data: null
  },
  AUTO_LOGIN: {
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
      name: '',
      qrcodeBase64: '',
      patientCardNo: '',
      barcodeBase64: ''
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
  }
};

export default states;
