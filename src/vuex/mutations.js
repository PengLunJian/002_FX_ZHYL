const mutations = {
  // 获取微信jsapi_ticket
  SELECT_JSAPI_TICKET_REQUEST(state) {
    state.JSAPI_TICKET.isLoading = false;
    state.JSAPI_TICKET.isSuccess = false;
    state.JSAPI_TICKET.isFailure = false;
  },
  SELECT_JSAPI_TICKET_SUCCESS(state, data) {
    state.JSAPI_TICKET.isLoading = true;
    state.JSAPI_TICKET.isSuccess = true;
    state.JSAPI_TICKET.isFailure = false;
    state.JSAPI_TICKET.data = data;
  },
  SELECT_JSAPI_TICKET_FAILURE(state) {
    state.JSAPI_TICKET.isLoading = true;
    state.JSAPI_TICKET.isSuccess = false;
    state.JSAPI_TICKET.isFailure = true;
  },
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
  // 非静默方式登录获取用户信息
  SELECT_GRANT_LOGIN_REQUEST(state) {
    state.GRANT_LOGIN.isLoading = false;
    state.GRANT_LOGIN.isSuccess = false;
    state.GRANT_LOGIN.isFailure = false;
  },
  SELECT_GRANT_LOGIN_SUCCESS(state, data) {
    state.GRANT_LOGIN.isLoading = true;
    state.GRANT_LOGIN.isSuccess = true;
    state.GRANT_LOGIN.isFailure = false;
    state.GRANT_LOGIN.data = data;
  },
  SELECT_GRANT_LOGIN_FAILURE(state) {
    state.GRANT_LOGIN.isLoading = true;
    state.GRANT_LOGIN.isSuccess = false;
    state.GRANT_LOGIN.isFailure = true;
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
  },
  // 查询医生列表
  SELECT_DOCTOR_LIST_REQUEST(state) {
    state.DOCTOR_LIST.isLoading = false;
    state.DOCTOR_LIST.isSuccess = false;
    state.DOCTOR_LIST.isFailure = false;
    state.DOCTOR_LIST.data = [];
  },
  SELECT_DOCTOR_LIST_SUCCESS(state, data) {
    state.DOCTOR_LIST.isLoading = true;
    state.DOCTOR_LIST.isSuccess = true;
    state.DOCTOR_LIST.isFailure = false;
    state.DOCTOR_LIST.data = data;
  },
  SELECT_DOCTOR_LIST_FAILURE(state) {
    state.DOCTOR_LIST.isLoading = true;
    state.DOCTOR_LIST.isSuccess = false;
    state.DOCTOR_LIST.isFailure = true;
  },
  // 查询医生列表
  SELECT_REGISTER_PAY_REQUEST(state) {
    state.REGISTER_PAY.isLoading = false;
    state.REGISTER_PAY.isSuccess = false;
    state.REGISTER_PAY.isFailure = false;
  },
  SELECT_REGISTER_PAY_SUCCESS(state, data) {
    state.REGISTER_PAY.isLoading = true;
    state.REGISTER_PAY.isSuccess = true;
    state.REGISTER_PAY.isFailure = false;
    state.REGISTER_PAY.data = data;
  },
  SELECT_REGISTER_PAY_FAILURE(state) {
    state.REGISTER_PAY.isLoading = true;
    state.REGISTER_PAY.isSuccess = false;
    state.REGISTER_PAY.isFailure = true;
  },
  // 查询检验报告详情
  SELECT_REPORT_LIST_REQUEST(state) {
    state.REPORT_LIST.isLoading = false;
    state.REPORT_LIST.isSuccess = false;
    state.REPORT_LIST.isFailure = false;
  },
  SELECT_REPORT_LIST_SUCCESS(state, data) {
    state.REPORT_LIST.isLoading = true;
    state.REPORT_LIST.isSuccess = true;
    state.REPORT_LIST.isFailure = false;
    state.REPORT_LIST.data = data;
  },
  SELECT_REPORT_LIST_FAILURE(state) {
    state.REPORT_LIST.isLoading = true;
    state.REPORT_LIST.isSuccess = false;
    state.REPORT_LIST.isFailure = true;
  },
  // 新增&修改健康档案
  INSERT_HEALTH_LIST_REQUEST(state) {
    state.HEALTH_LIST.isLoading = false;
    state.HEALTH_LIST.isSuccess = false;
    state.HEALTH_LIST.isFailure = false;
  },
  INSERT_HEALTH_LIST_SUCCESS(state, data) {
    state.HEALTH_LIST.isLoading = true;
    state.HEALTH_LIST.isSuccess = true;
    state.HEALTH_LIST.isFailure = false;
    state.HEALTH_LIST.data = data;
  },
  INSERT_HEALTH_LIST_FAILURE(state) {
    state.HEALTH_LIST.isLoading = true;
    state.HEALTH_LIST.isSuccess = false;
    state.HEALTH_LIST.isFailure = true;
  },
  // 查询健康档案
  SELECT_HEALTH_LIST_REQUEST(state) {
    state.HEALTH_LIST.isLoading = false;
    state.HEALTH_LIST.isSuccess = false;
    state.HEALTH_LIST.isFailure = false;
  },
  SELECT_HEALTH_LIST_SUCCESS(state, data) {
    state.HEALTH_LIST.isLoading = true;
    state.HEALTH_LIST.isSuccess = true;
    state.HEALTH_LIST.isFailure = false;
    state.HEALTH_LIST.data = data;
  },
  SELECT_HEALTH_LIST_FAILURE(state) {
    state.HEALTH_LIST.isLoading = true;
    state.HEALTH_LIST.isSuccess = false;
    state.HEALTH_LIST.isFailure = true;
  }
};

export default mutations;
