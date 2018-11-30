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
  // 查询JSSDK的Token
  SELECT_WECHAT_TOKEN_REQUEST(state) {
    state.WECHAT_TOKEN.isLoading = false;
    state.WECHAT_TOKEN.isSuccess = false;
    state.WECHAT_TOKEN.isFailure = false;
  },
  SELECT_WECHAT_TOKEN_SUCCESS(state, data) {
    state.WECHAT_TOKEN.isLoading = true;
    state.WECHAT_TOKEN.isSuccess = true;
    state.WECHAT_TOKEN.isFailure = false;
    state.WECHAT_TOKEN.data = data;
  },
  SELECT_WECHAT_TOKEN_FAILURE(state) {
    state.WECHAT_TOKEN.isLoading = true;
    state.WECHAT_TOKEN.isSuccess = false;
    state.WECHAT_TOKEN.isFailure = true;
  },
  // 查询JSSDK的Token
  SELECT_JSSDK_CONFIG_REQUEST(state) {
    state.JSSDK_CONFIG.isLoading = false;
    state.JSSDK_CONFIG.isSuccess = false;
    state.JSSDK_CONFIG.isFailure = false;
  },
  SELECT_JSSDK_CONFIG_SUCCESS(state, data) {
    state.JSSDK_CONFIG.isLoading = true;
    state.JSSDK_CONFIG.isSuccess = true;
    state.JSSDK_CONFIG.isFailure = false;
    state.JSSDK_CONFIG.data = data;
  },
  SELECT_JSSDK_CONFIG_FAILURE(state) {
    state.JSSDK_CONFIG.isLoading = true;
    state.JSSDK_CONFIG.isSuccess = false;
    state.JSSDK_CONFIG.isFailure = true;
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
  // 查询医生列表
  SELECT_DEPARTMENT_REQUEST(state) {
    state.DEPARTMENT.isLoading = false;
    state.DEPARTMENT.isSuccess = false;
    state.DEPARTMENT.isFailure = false;
  },
  SELECT_DEPARTMENT_SUCCESS(state, data) {
    state.DEPARTMENT.isLoading = true;
    state.DEPARTMENT.isSuccess = true;
    state.DEPARTMENT.isFailure = false;
    state.DEPARTMENT.data = data;
  },
  SELECT_DEPARTMENT_FAILURE(state) {
    state.DEPARTMENT.isLoading = true;
    state.DEPARTMENT.isSuccess = false;
    state.DEPARTMENT.isFailure = true;
  },
// 查询医生列表
  SELECT_SUB_DEPARTMENT_REQUEST(state) {
    state.SUB_DEPARTMENT.isLoading = false;
    state.SUB_DEPARTMENT.isSuccess = false;
    state.SUB_DEPARTMENT.isFailure = false;
  },
  SELECT_SUB_DEPARTMENT_SUCCESS(state, data) {
    state.SUB_DEPARTMENT.isLoading = true;
    state.SUB_DEPARTMENT.isSuccess = true;
    state.SUB_DEPARTMENT.isFailure = false;
    state.SUB_DEPARTMENT.data = data;
  },
  SELECT_SUB_DEPARTMENT_FAILURE(state) {
    state.SUB_DEPARTMENT.isLoading = true;
    state.SUB_DEPARTMENT.isSuccess = false;
    state.SUB_DEPARTMENT.isFailure = true;
  },
  // 查询医生详情
  SELECT_DOCTOR_DETAIL_REQUEST(state) {
    state.DOCTOR_DETAIL.isLoading = false;
    state.DOCTOR_DETAIL.isSuccess = false;
    state.DOCTOR_DETAIL.isFailure = false;
  },
  SELECT_DOCTOR_DETAIL_SUCCESS(state, data) {
    state.DOCTOR_DETAIL.isLoading = true;
    state.DOCTOR_DETAIL.isSuccess = true;
    state.DOCTOR_DETAIL.isFailure = false;
    state.DOCTOR_DETAIL.data = data;
  },
  SELECT_DOCTOR_DETAIL_FAILURE(state) {
    state.DOCTOR_DETAIL.isLoading = true;
    state.DOCTOR_DETAIL.isSuccess = false;
    state.DOCTOR_DETAIL.isFailure = true;
  },
  // 查询科室详情
  SELECT_DEPT_DETAIL_REQUEST(state) {
    state.DEPT_DETAIL.isLoading = false;
    state.DEPT_DETAIL.isSuccess = false;
    state.DEPT_DETAIL.isFailure = false;
  },
  SELECT_DEPT_DETAIL_SUCCESS(state, data) {
    state.DEPT_DETAIL.isLoading = true;
    state.DEPT_DETAIL.isSuccess = true;
    state.DEPT_DETAIL.isFailure = false;
    state.DEPT_DETAIL.data = data;
  },
  SELECT_DEPT_DETAIL_FAILURE(state) {
    state.DEPT_DETAIL.isLoading = true;
    state.DEPT_DETAIL.isSuccess = false;
    state.DEPT_DETAIL.isFailure = true;
  },
  // 查询科室详情
  SELECT_APPO_CREATE_REQUEST(state) {
    state.APPO_CREATE.isLoading = false;
    state.APPO_CREATE.isSuccess = false;
    state.APPO_CREATE.isFailure = false;
  },
  SELECT_APPO_CREATE_SUCCESS(state, data) {
    state.APPO_CREATE.isLoading = true;
    state.APPO_CREATE.isSuccess = true;
    state.APPO_CREATE.isFailure = false;
    state.APPO_CREATE.data = data;
  },
  SELECT_APPO_CREATE_FAILURE(state) {
    state.APPO_CREATE.isLoading = true;
    state.APPO_CREATE.isSuccess = false;
    state.APPO_CREATE.isFailure = true;
  }
};

export default mutations;
