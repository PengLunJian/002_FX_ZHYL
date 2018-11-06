const states = {
  DEFAULT_CARD: {
    isLoading: false,
    isSuccess: false,
    isFailed: false,
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
    isFailed: false,
    data: []
  },
  REGISTER_LIST: {
    isLoading: false,
    isSuccess: false,
    isFailed: false,
    data: []
  },
  SUBSCRIBE_LIST: {
    isLoading: false,
    isSuccess: false,
    isFailed: false,
    data: []
  },
  ISPAYED_RECORDS: {
    isLoading: false,
    isSuccess: false,
    isFailed: false,
    data: []
  },
  NOPAYED_RECORDS: {
    isLoading: false,
    isSuccess: false,
    isFailed: false,
    data: []
  }
};

export default states;
