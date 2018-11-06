const mutations = {
  // 查询默认就诊卡信息
  SELECT_DEFAULT_CARD_REQUEST(state) {
    state.DEFAULT_CARD.isLoading = false;
    state.DEFAULT_CARD.isSuccess = false;
    state.DEFAULT_CARD.isFailed = false;
  },
  SELECT_DEFAULT_CARD_SUCCESS(state, data) {
    state.DEFAULT_CARD.isLoading = true;
    state.DEFAULT_CARD.isSuccess = true;
    state.DEFAULT_CARD.isFailed = false;
    state.DEFAULT_CARD.data = data;
  },
  SELECT_DEFAULT_CARD_FAILURE(state) {
    state.DEFAULT_CARD.isLoading = true;
    state.DEFAULT_CARD.isSuccess = false;
    state.DEFAULT_CARD.isFailed = true;
  },
  // xxx
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
  },
  // 已支付记录
  SELECT_ISPAYED_RECORDS_REQUEST(state) {
    state.ISPAYED_RECORDS.isLoading = false;
    state.ISPAYED_RECORDS.isSuccess = false;
    state.ISPAYED_RECORDS.isFailed = false;
    state.ISPAYED_RECORDS.data = [];
  },
  SELECT_ISPAYED_RECORDS_FAILURE(state, data) {
    state.ISPAYED_RECORDS.isLoading = true;
    state.ISPAYED_RECORDS.isSuccess = false;
    state.ISPAYED_RECORDS.isFailed = true;
    state.ISPAYED_RECORDS.data = data;
  },
  SELECT_ISPAYED_RECORDS_SUCCESS(state, data) {
    state.ISPAYED_RECORDS.isLoading = true;
    state.ISPAYED_RECORDS.isSuccess = true;
    state.ISPAYED_RECORDS.isFailed = false;
    state.ISPAYED_RECORDS.data = data;
  },
  // 未支付记录
  SELECT_NOPAYED_RECORDS_REQUEST(state) {
    state.NOPAYED_RECORDS.isLoading = false;
    state.NOPAYED_RECORDS.isSuccess = false;
    state.NOPAYED_RECORDS.isFailed = false;
    state.NOPAYED_RECORDS.data = [];
  },
  SELECT_NOPAYED_RECORDS_FAILURE(state, data) {
    state.NOPAYED_RECORDS.isLoading = true;
    state.NOPAYED_RECORDS.isSuccess = false;
    state.NOPAYED_RECORDS.isFailed = true;
    state.NOPAYED_RECORDS.data = data;
  },
  SELECT_NOPAYED_RECORDS_SUCCESS(state, data) {
    state.NOPAYED_RECORDS.isLoading = true;
    state.NOPAYED_RECORDS.isSuccess = true;
    state.NOPAYED_RECORDS.isFailed = false;
    state.NOPAYED_RECORDS.data = data;
  }
};

export default mutations;
