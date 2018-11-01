const mutations = {
  UPDATE_DEFAULT_CARD(state, data) {
    state.DEFAULT_CARD.NAME = data.name;
    state.DEFAULT_CARD.CARD_NO = data.patientCardNo;
    state.DEFAULT_CARD.QR_CODE = data.qrcodeBase64;
    state.DEFAULT_CARD.BAR_CODE = data.barcodeBase64;
  },
  CLEAR_VISITOR_LIST(state, data) {
    state.VISITOR_LIST.LIST = data;
  },
  INSERT_VISITOR_LIST(state, data) {
    state.VISITOR_LIST.LIST = data;
  },
  DELETE_VISITOR_LIST(state, data) {
    state.VISITOR_LIST.LIST = data;
  },
  UPDATE_VISITOR_LIST(state, data) {
    state.VISITOR_LIST.LIST = data;
  },
  SELECT_VISITOR_LIST(state, data) {
    state.VISITOR_LIST.LIST = data;
  },
  CLEAR_REGISTER_LIST(state, data) {
    state.REGISTER_LIST.list = data;
  },
  SELECT_REGISTER_LIST(state, data) {
    state.REGISTER_LIST.list = data;
    state.REGISTER_LIST.isLoading = true;
  },
  CLEAR_SUBSCRIBE_LIST(state, data) {
    state.SUBSCRIBE_LIST.list = data;
  },
  SELECT_SUBSCRIBE_LIST(state, data) {
    state.SUBSCRIBE_LIST.list = data;
    state.SUBSCRIBE_LIST.isLoading = true;
  }
};

export default mutations;
