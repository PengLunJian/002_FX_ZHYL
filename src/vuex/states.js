const states = {
  DEFAULT_CARD: {
    NAME: '',
    QR_CODE: '',
    CARD_NO: '',
    BAR_CODE: ''
  },
  VISITOR_LIST: {
    isLoading: false,
    LIST: []
  },
  REGISTER_LIST: {
    isLoading: false,
    list: []
  },
  SUBSCRIBE_LIST: {
    isLoading: false,
    list: []
  },
  PAYMENT_RECORD: {
    isLoading: false,
    data: [
      {list: []},
      {list: []}
    ]
  }
};

export default states;
