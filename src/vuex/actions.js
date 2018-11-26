import apis from '../apis';
import axios from '../axios/axios';
import * as ACTION_TYPES from './actionTypes';

const actions = {
  // 查询设备标识
  selectDeviceId({commit}) {
    commit(ACTION_TYPES.SELECT_DEVICEID_REQUEST);
    return new Promise((resolve, reject) => {
      axios.post(apis.selectDeviceId)
        .then((res) => {
          res = res || {};
          const {data, success} = res;
          if (data && success) {
            commit(ACTION_TYPES.SELECT_DEVICEID_SUCCESS, data);
            resolve(res);
          } else {
            commit(ACTION_TYPES.SELECT_DEVICEID_FAILURE);
          }
        })
        .catch((err) => {
          commit(ACTION_TYPES.SELECT_DEVICEID_FAILURE);
          reject(err);
        });
    });
  },
  // 授权登录查询用户信息
  selectGrantLogin({commit}, data) {
    commit(ACTION_TYPES.SELECT_GRANT_LOGIN_REQUEST);
    return new Promise((resolve, reject) => {
      axios.post(apis.selectGrantLogin, data)
        .then((res) => {
          res = res || {};
          const {data, success} = res;
          if (data && success) {
            commit(ACTION_TYPES.SELECT_GRANT_LOGIN_SUCCESS, data);
            resolve(res);
          } else {
            commit(ACTION_TYPES.SELECT_GRANT_LOGIN_FAILURE);
          }
        })
        .catch((err) => {
          commit(ACTION_TYPES.SELECT_GRANT_LOGIN_FAILURE);
          reject(err);
        });
    });
  },
  // 查询微信JSSDK的Token
  selectWechatToken({commit}) {
    commit(ACTION_TYPES.SELECT_WECHAT_TOKEN_REQUEST);
    return new Promise((resolve, reject) => {
      axios.post(apis.selectWechatToken)
        .then((res) => {
          const {data} = res;
          commit(ACTION_TYPES.SELECT_WECHAT_TOKEN_SUCCESS, data);
          resolve(res);
        })
        .catch((err) => {
          commit(ACTION_TYPES.SELECT_WECHAT_TOKEN_FAILURE);
          reject(err);
        });
    });
  },
  // 查询微信JSSDK的配置参数
  selectJSSDKConfig({commit}, data) {
    commit(ACTION_TYPES.SELECT_JSSDK_CONFIG_REQUEST);
    return new Promise((resolve, reject) => {
      axios.post(apis.selectJSSDKConfig, data)
        .then((res) => {
          commit(ACTION_TYPES.SELECT_JSSDK_CONFIG_SUCCESS, data);
          resolve(res);
        })
        .catch((err) => {
          commit(ACTION_TYPES.SELECT_JSSDK_CONFIG_FAILURE);
          reject(err);
        });
    });
  },
  // 查询默认就诊卡
  selectDefaultCard({commit}) {
    return new Promise((resolve, reject) => {
      axios.post(apis.selectDefaultCard)
        .then((res) => {
          res = res || {};
          const {data, success} = res;
          if (!success) {
            commit(ACTION_TYPES.SELECT_DEFAULT_CARD_FAILURE);
          } else {
            commit(ACTION_TYPES.SELECT_DEFAULT_CARD_REQUEST);
            commit(ACTION_TYPES.SELECT_DEFAULT_CARD_SUCCESS, data);
          }
          resolve(data);
        })
        .catch((err) => {
          commit(ACTION_TYPES.SELECT_DEFAULT_CARD_FAILURE);
          reject(err);
        });
    });
  },
  // 新增就诊卡
  insertVisitorList({commit, state}, data) {
    commit(ACTION_TYPES.INSERT_VISITOR_LIST_REQUEST);
    return new Promise((resolve, reject) => {
      axios.post(apis.insertVisitorList, data)
        .then((res) => {
          const {data, success} = res;
          if (data && success) {
            commit(ACTION_TYPES.INSERT_VISITOR_LIST_SUCCESS, data);
          }
          resolve(res);
        })
        .catch((err) => {
          commit(ACTION_TYPES.INSERT_VISITOR_LIST_FAILURE);
          reject(err);
        });
    });
  },
  // 删除就诊卡
  deleteVisitorList({commit, state}, data) {
    commit(ACTION_TYPES.DELETE_VISITOR_LIST_REQUEST);
    return new Promise((resolve, reject) => {
      axios.post(apis.deleteVisitorList, data)
        .then((res) => {
          const {data, success} = res;
          if (data && success) {
            commit(ACTION_TYPES.DELETE_VISITOR_LIST_SUCCESS, data);
          }
          resolve(res);
        })
        .catch((err) => {
          commit(ACTION_TYPES.DELETE_VISITOR_LIST_FAILURE);
          reject(err);
        });
    });
  },
  // 更新就诊卡
  updateVisitorList({commit, state}, data) {
    commit(ACTION_TYPES.UPDATE_VISITOR_LIST_REQUEST);
    return new Promise((resolve, reject) => {
      axios.post(apis.updateVisitorList, data)
        .then((res) => {
          const {data} = res;
          commit(ACTION_TYPES.UPDATE_VISITOR_LIST_SUCCESS, data);
          resolve(res);
        })
        .catch((err) => {
          commit(ACTION_TYPES.UPDATE_VISITOR_LIST_FAILURE);
          reject(err);
        });
    });
  },
  // 查询就诊卡
  selectVisitorList({commit, state}, data) {
    const {Value} = data;
    return new Promise((resolve, reject) => {
      axios.post(apis.selectVisitorList, data)
        .then((res) => {
          const data = res.data.rows;
          const oldData = state.VISITOR_LIST.data;
          let newData = oldData.concat(data);
          if (Value === 1) {
            newData = data;
            commit(ACTION_TYPES.SELECT_VISITOR_LIST_REQUEST);
          }
          commit(ACTION_TYPES.SELECT_VISITOR_LIST_SUCCESS, newData);
          resolve(res);
        })
        .catch((err) => {
          commit(ACTION_TYPES.SELECT_VISITOR_LIST_FAILURE);
          reject(err);
        });
    });
  },
  // 查询我的挂号
  selectRegisterList({commit, state}, data) {
    const {pageIndex} = data;
    return new Promise((resolve, reject) => {
      axios.post(apis.selectRegisterList, data)
        .then((res) => {
          const {data} = res;
          const oldData = state.REGISTER_LIST.data;
          let newData = oldData.concat(data);
          if (pageIndex === 1) {
            newData = data;
            commit(ACTION_TYPES.SELECT_REGISTER_LIST_REQUEST);
          }
          commit(ACTION_TYPES.SELECT_REGISTER_LIST_SUCCESS, newData);
          resolve(res);
        })
        .catch((err) => {
          commit(ACTION_TYPES.SELECT_REGISTER_LIST_FAILURE);
          reject(err);
        });
    });
  },
  // 查询我的预约
  selectSubscribeList({commit, state}, data) {
    const {pageIndex} = data;
    return new Promise((resolve, reject) => {
      axios.post(apis.selectSubscribeList, data)
        .then((res) => {
          const {data} = res;
          const oldData = state.SUBSCRIBE_LIST.data;
          let newData = oldData.concat(data);
          if (pageIndex === 1) {
            newData = data;
            commit(ACTION_TYPES.SELECT_SUBSCRIBE_LIST_REQUEST);
          }
          commit(ACTION_TYPES.SELECT_SUBSCRIBE_LIST_SUCCESS, newData);
          resolve(res);
        })
        .catch((err) => {
          commit(ACTION_TYPES.SELECT_SUBSCRIBE_LIST_FAILURE);
          reject(err);
        });
    });
  },
  // 查询已支付记录
  selectIsPayedRecords({commit, state}, data) {
    const {pageIndex} = data;
    return new Promise((resolve, reject) => {
      axios.post(apis.selectPaymentRecord, data)
        .then((res) => {
          const {data} = res;
          if (pageIndex === 1) {
            commit(ACTION_TYPES.SELECT_ISPAYED_RECORDS_REQUEST);
          }
          const oldData = state.ISPAYED_RECORDS.data;
          const newData = oldData.concat(data);
          commit(ACTION_TYPES.SELECT_ISPAYED_RECORDS_SUCCESS, newData);
          resolve(data);
        })
        .catch((err) => {
          commit(ACTION_TYPES.SELECT_ISPAYED_RECORDS_FAILURE);
          reject(err);
        });
    });
  },
  // 查询未支付记录
  selectNoPayedRecords({commit, state}, data) {
    const {pageIndex} = data;
    return new Promise((resolve, reject) => {
      axios.post(apis.selectPaymentRecord, data)
        .then((res) => {
          const {data} = res;
          if (pageIndex === 1) {
            commit(ACTION_TYPES.SELECT_NOPAYED_RECORDS_REQUEST);
          }
          const oldData = state.NOPAYED_RECORDS.data;
          const newData = oldData.concat(data);
          commit(ACTION_TYPES.SELECT_NOPAYED_RECORDS_SUCCESS, newData);
          resolve(data);
        })
        .catch((err) => {
          commit(ACTION_TYPES.SELECT_NOPAYED_RECORDS_FAILURE);
          reject(err);
        });
    });
  },
  // 查询医生列表
  selectDoctorList({commit, state}, data) {
    const {pageIndex} = data;
    return new Promise((resolve, reject) => {
      axios.post(apis.selectDoctorList, data)
        .then((res) => {
          res = res || {};
          const {data} = res;
          if (pageIndex === 1) {
            commit(ACTION_TYPES.SELECT_DOCTOR_LIST_REQUEST);
          }
          const oldData = state.DOCTOR_LIST.data;
          const newData = oldData.concat(data);
          commit(ACTION_TYPES.SELECT_DOCTOR_LIST_SUCCESS, newData);
          resolve(res);
        })
        .catch((err) => {
          commit(ACTION_TYPES.SELECT_DOCTOR_LIST_FAILURE);
          reject(err);
        });
    });
  },
  // 查询支付需要的入参
  selectRegisterPay({commit, state}, data) {
    commit(ACTION_TYPES.SELECT_REGISTER_PAY_REQUEST);
    return new Promise((resolve, reject) => {
      axios.post(apis.selectRegisterPay, data)
        .then((res) => {
          const {data} = res;
          commit(ACTION_TYPES.SELECT_REGISTER_PAY_SUCCESS, data);
          resolve(res);
        })
        .catch((err) => {
          commit(ACTION_TYPES.SELECT_REGISTER_PAY_FAILURE);
          reject(err);
        });
    });
  },
  // 查询排班科室
  selectDepartment({commit, state}, data) {
    commit(ACTION_TYPES.SELECT_DEPARTMENT_REQUEST);
    commit(ACTION_TYPES.SELECT_SUB_DEPARTMENT_REQUEST);
    return new Promise((resolve, reject) => {
      axios.post(apis.selectDepartment, data)
        .then((res) => {
          res = res || {};
          const {data, success} = res;
          if (data && success) {
            const {parents, subgrades} = data;
            commit(ACTION_TYPES.SELECT_DEPARTMENT_SUCCESS, parents);
            commit(ACTION_TYPES.SELECT_SUB_DEPARTMENT_SUCCESS, subgrades);
            resolve(res);
          } else {
            commit(ACTION_TYPES.SELECT_DEPARTMENT_FAILURE);
            commit(ACTION_TYPES.SELECT_SUB_DEPARTMENT_FAILURE);
          }
        })
        .catch((err) => {
          commit(ACTION_TYPES.SELECT_DEPARTMENT_FAILURE);
          commit(ACTION_TYPES.SELECT_SUB_DEPARTMENT_FAILURE);
          reject(err);
        });
    });
  },
  // 查询子级科室
  selectSubDepartment({commit, state}, data) {
    commit(ACTION_TYPES.SELECT_SUB_DEPARTMENT_REQUEST);
    return new Promise((resolve, reject) => {
      axios.post(apis.selectSubDepartment, data)
        .then((res) => {
          res = res || {};
          const {data, success} = res;
          if (data && success) {
            commit(ACTION_TYPES.SELECT_SUB_DEPARTMENT_SUCCESS, data);
            resolve(res);
          } else {
            commit(ACTION_TYPES.SELECT_SUB_DEPARTMENT_FAILURE);
          }
        })
        .catch((err) => {
          commit(ACTION_TYPES.SELECT_SUB_DEPARTMENT_FAILURE);
          reject(err);
        });
    });
  }
};

export default actions;
