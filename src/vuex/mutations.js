const mutations = {
  // 查询默认就诊卡信息
  SELECT_DEVICEID_REQUEST(state) {
    state.DEVICEID.isLoading = false;
    state.DEVICEID.isSuccess = false;
    state.DEVICEID.isFailure = false;
  },
  SELECT_DEVICEID_SUCCESS(state, data) {
    state.DEVICEID.isLoading = true;
    state.DEVICEID.isSuccess = true;
    state.DEVICEID.isFailure = false;
    state.DEVICEID.data = data;
  },
  SELECT_DEVICEID_FAILURE(state) {
    state.DEVICEID.isLoading = true;
    state.DEVICEID.isSuccess = false;
    state.DEVICEID.isFailure = true;
  },
  // 静默方式登录获取用户信息
  SELECT_AUTO_LOGIN_REQUEST(state) {
    state.AUTO_LOGIN.isLoading = false;
    state.AUTO_LOGIN.isSuccess = false;
    state.AUTO_LOGIN.isFailure = false;
  },
  SELECT_AUTO_LOGIN_SUCCESS(state, data) {
    state.AUTO_LOGIN.isLoading = true;
    state.AUTO_LOGIN.isSuccess = true;
    state.AUTO_LOGIN.isFailure = false;
    state.AUTO_LOGIN.data = data;
  },
  SELECT_AUTO_LOGIN_FAILURE(state) {
    state.AUTO_LOGIN.isLoading = true;
    state.AUTO_LOGIN.isSuccess = false;
    state.AUTO_LOGIN.isFailure = true;
  },
  // 非静默方式登录获取用户信息
  SELECT_MANU_LOGIN_REQUEST(state) {
    state.MANU_LOGIN.isLoading = false;
    state.MANU_LOGIN.isSuccess = false;
    state.MANU_LOGIN.isFailure = false;
  },
  SELECT_MANU_LOGIN_SUCCESS(state, data) {
    state.MANU_LOGIN.isLoading = true;
    state.MANU_LOGIN.isSuccess = true;
    state.MANU_LOGIN.isFailure = false;
    state.MANU_LOGIN.data = data;
  },
  SELECT_MANU_LOGIN_FAILURE(state) {
    state.MANU_LOGIN.isLoading = true;
    state.MANU_LOGIN.isSuccess = false;
    state.MANU_LOGIN.isFailure = true;
  },
  // 查询默认就诊卡信息
  SELECT_DEFAULT_CARD_REQUEST(state) {
    state.DEFAULT_CARD.isLoading = false;
    state.DEFAULT_CARD.isSuccess = false;
    state.DEFAULT_CARD.isFailure = false;
  },
  SELECT_DEFAULT_CARD_SUCCESS(state, data) {
    state.DEFAULT_CARD.isLoading = true;
    state.DEFAULT_CARD.isSuccess = true;
    state.DEFAULT_CARD.isFailure = false;
    state.DEFAULT_CARD.data = data;
  },
  SELECT_DEFAULT_CARD_FAILURE(state) {
    state.DEFAULT_CARD.isLoading = true;
    state.DEFAULT_CARD.isSuccess = false;
    state.DEFAULT_CARD.isFailure = true;
  },
  // 新增就诊卡
  INSERT_VISITOR_LIST_REQUEST(state) {
    state.VISITOR_LIST.isLoading = false;
    state.VISITOR_LIST.isSuccess = false;
    state.VISITOR_LIST.isFailure = false;
  },
  INSERT_VISITOR_LIST_SUCCESS(state, data) {
    state.VISITOR_LIST.isLoading = true;
    state.VISITOR_LIST.isSuccess = true;
    state.VISITOR_LIST.isFailure = false;
    state.VISITOR_LIST.data = data;
  },
  INSERT_VISITOR_LIST_FAILURE(state) {
    state.VISITOR_LIST.isLoading = true;
    state.VISITOR_LIST.isSuccess = false;
    state.VISITOR_LIST.isFailure = true;
  },
  // 删除就诊卡
  DELETE_VISITOR_LIST_REQUEST(state) {
    state.VISITOR_LIST.isLoading = false;
    state.VISITOR_LIST.isSuccess = false;
    state.VISITOR_LIST.isFailure = false;
  },
  DELETE_VISITOR_LIST_SUCCESS(state, data) {
    state.VISITOR_LIST.isLoading = true;
    state.VISITOR_LIST.isSuccess = true;
    state.VISITOR_LIST.isFailure = false;
    state.VISITOR_LIST.data = data;
  },
  DELETE_VISITOR_LIST_FAILURE(state) {
    state.VISITOR_LIST.isLoading = true;
    state.VISITOR_LIST.isSuccess = false;
    state.VISITOR_LIST.isFailure = true;
  },
  // 更新就诊卡
  UPDATE_VISITOR_LIST_REQUEST(state) {
    state.VISITOR_LIST.isLoading = false;
    state.VISITOR_LIST.isSuccess = false;
    state.VISITOR_LIST.isFailure = false;
  },
  UPDATE_VISITOR_LIST_SUCCESS(state, data) {
    state.VISITOR_LIST.isLoading = true;
    state.VISITOR_LIST.isSuccess = true;
    state.VISITOR_LIST.isFailure = false;
    state.VISITOR_LIST.data = data;
  },
  UPDATE_VISITOR_LIST_FAILURE(state) {
    state.VISITOR_LIST.isLoading = true;
    state.VISITOR_LIST.isSuccess = false;
    state.VISITOR_LIST.isFailure = true;
  },
  // 查询就诊卡
  SELECT_VISITOR_LIST_REQUEST(state) {
    state.VISITOR_LIST.isLoading = false;
    state.VISITOR_LIST.isSuccess = false;
    state.VISITOR_LIST.isFailure = false;
    state.VISITOR_LIST.data = [];
  },
  SELECT_VISITOR_LIST_SUCCESS(state, data) {
    state.VISITOR_LIST.isLoading = true;
    state.VISITOR_LIST.isSuccess = true;
    state.VISITOR_LIST.isFailure = false;
    state.VISITOR_LIST.data = data;
  },
  SELECT_VISITOR_LIST_FAILURE(state) {
    state.VISITOR_LIST.isLoading = true;
    state.VISITOR_LIST.isSuccess = false;
    state.VISITOR_LIST.isFailure = true;
  },
  // 查询我的预约
  SELECT_REGISTER_LIST_REQUEST(state) {
    state.REGISTER_LIST.isLoading = false;
    state.REGISTER_LIST.isSuccess = false;
    state.REGISTER_LIST.isFailure = false;
  },
  SELECT_REGISTER_LIST_SUCCESS(state, data) {
    state.REGISTER_LIST.isLoading = true;
    state.REGISTER_LIST.isSuccess = true;
    state.REGISTER_LIST.isFailure = false;
    state.REGISTER_LIST.data = data;
  },
  SELECT_REGISTER_LIST_FAILURE(state) {
    state.REGISTER_LIST.isLoading = true;
    state.REGISTER_LIST.isSuccess = false;
    state.REGISTER_LIST.isFailure = true;
  },
  // 查询我的挂号
  SELECT_SUBSCRIBE_LIST_REQUEST(state) {
    state.SUBSCRIBE_LIST.isLoading = false;
    state.SUBSCRIBE_LIST.isSuccess = false;
    state.SUBSCRIBE_LIST.isFailure = false;
  },
  SELECT_SUBSCRIBE_LIST_SUCCESS(state, data) {
    state.SUBSCRIBE_LIST.isLoading = true;
    state.SUBSCRIBE_LIST.isSuccess = true;
    state.SUBSCRIBE_LIST.isFailure = false;
    state.SUBSCRIBE_LIST.data = data;
  },
  SELECT_SUBSCRIBE_LIST_FAILURE(state) {
    state.SUBSCRIBE_LIST.isLoading = true;
    state.SUBSCRIBE_LIST.isSuccess = false;
    state.SUBSCRIBE_LIST.isFailure = true;
  },
  // 已支付记录
  SELECT_ISPAYED_RECORDS_REQUEST(state) {
    state.ISPAYED_RECORDS.isLoading = false;
    state.ISPAYED_RECORDS.isSuccess = false;
    state.ISPAYED_RECORDS.isFailure = false;
    state.ISPAYED_RECORDS.data = [];
  },
  SELECT_ISPAYED_RECORDS_SUCCESS(state, data) {
    state.ISPAYED_RECORDS.isLoading = true;
    state.ISPAYED_RECORDS.isSuccess = true;
    state.ISPAYED_RECORDS.isFailure = false;
    state.ISPAYED_RECORDS.data = data;
  },
  SELECT_ISPAYED_RECORDS_FAILURE(state) {
    state.ISPAYED_RECORDS.isLoading = true;
    state.ISPAYED_RECORDS.isSuccess = false;
    state.ISPAYED_RECORDS.isFailure = true;
  },
  // 未支付记录
  SELECT_NOPAYED_RECORDS_REQUEST(state) {
    state.NOPAYED_RECORDS.isLoading = false;
    state.NOPAYED_RECORDS.isSuccess = false;
    state.NOPAYED_RECORDS.isFailure = false;
    state.NOPAYED_RECORDS.data = [];
  },
  SELECT_NOPAYED_RECORDS_SUCCESS(state, data) {
    state.NOPAYED_RECORDS.isLoading = true;
    state.NOPAYED_RECORDS.isSuccess = true;
    state.NOPAYED_RECORDS.isFailure = false;
    state.NOPAYED_RECORDS.data = data;
  },
  SELECT_NOPAYED_RECORDS_FAILURE(state) {
    state.NOPAYED_RECORDS.isLoading = true;
    state.NOPAYED_RECORDS.isSuccess = false;
    state.NOPAYED_RECORDS.isFailure = true;
  }
};

export default mutations;
