import JsBarcode from 'jsbarcode';
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
          if (success) {
            commit(ACTION_TYPES.SELECT_DEVICEID_SUCCESS, data);
          } else {
            commit(ACTION_TYPES.SELECT_DEVICEID_FAILURE);
            commit(ACTION_TYPES.SELECT_GRANT_LOGIN_FAILURE);
          }
          resolve(res);
        })
        .catch((err) => {
          commit(ACTION_TYPES.SELECT_DEVICEID_FAILURE);
          commit(ACTION_TYPES.SELECT_GRANT_LOGIN_FAILURE);
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
          if (success) {
            commit(ACTION_TYPES.SELECT_GRANT_LOGIN_SUCCESS, data);
          } else {
            commit(ACTION_TYPES.SELECT_GRANT_LOGIN_FAILURE);
          }
          resolve(res);
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
          res = res || {};
          const {data, success} = res;
          if (success) {
            commit(ACTION_TYPES.SELECT_WECHAT_TOKEN_SUCCESS, data);
          } else {
            commit(ACTION_TYPES.SELECT_WECHAT_TOKEN_FAILURE);
          }
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
          res = res || {};
          const {data, success} = res;
          if (success) {
            commit(ACTION_TYPES.SELECT_JSSDK_CONFIG_SUCCESS, data);
          } else {
            commit(ACTION_TYPES.SELECT_JSSDK_CONFIG_FAILURE);
          }
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
    commit(ACTION_TYPES.SELECT_DEFAULT_CARD_REQUEST);
    return new Promise((resolve, reject) => {
      axios.post(apis.selectDefaultCard)
        .then((res) => {
          res = res || {};
          const {data, success} = res;
          if (success) {
            const {patientCardNo} = data || {};
            let oImage = new Image();
            JsBarcode(oImage, patientCardNo, {
              format: 'CODE39',
              displayValue: false
            });
            const tempObj = {barCodeUrl: oImage.src};
            const newData = Object.assign(data, tempObj);
            commit(ACTION_TYPES.SELECT_DEFAULT_CARD_SUCCESS, newData);
            oImage = null;
          } else {
            commit(ACTION_TYPES.SELECT_DEFAULT_CARD_FAILURE);
          }
          resolve(res);
        })
        .catch((err) => {
          commit(ACTION_TYPES.SELECT_DEFAULT_CARD_FAILURE);
          reject(err);
        });
    });
  },
  // 查询默认就诊卡
  selectMessageList({commit}) {
    commit(ACTION_TYPES.SELECT_MESSAGE_LIST_REQUEST);
    return new Promise((resolve, reject) => {
      axios.post(apis.selectMessageList)
        .then((res) => {
          res = res || {};
          const {data, success} = res;
          if (success) {
            commit(ACTION_TYPES.SELECT_MESSAGE_LIST_SUCCESS, data);
          } else {
            commit(ACTION_TYPES.SELECT_MESSAGE_LIST_FAILURE);
          }
          resolve(res);
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
          res = res || {};
          const {data, success} = res;
          if (success) {
            const oldData = state.VISITOR_LIST.data;
            const newData = oldData.concat(data);
            commit(ACTION_TYPES.INSERT_VISITOR_LIST_SUCCESS, newData);
          } else {
            commit(ACTION_TYPES.INSERT_VISITOR_LIST_FAILURE);
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
    const {value} = data;
    commit(ACTION_TYPES.DELETE_VISITOR_LIST_REQUEST);
    return new Promise((resolve, reject) => {
      axios.post(apis.deleteVisitorList, data)
        .then((res) => {
          res = res || {};
          const {success} = res;
          if (success) {
            const oldData = state.VISITOR_LIST.data;
            const newData = oldData.filter(item => value !== item.patientCardNo);
            let isHasDefault = false;
            newData.map((item) => {
              if (item.isDefault) {
                isHasDefault = true;
              }
            });
            if (newData.length && !isHasDefault) newData[0].isDefault = true;
            commit(ACTION_TYPES.DELETE_VISITOR_LIST_SUCCESS, newData);
          } else {
            commit(ACTION_TYPES.DELETE_VISITOR_LIST_FAILURE);
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
          res = res || {};
          const {data, success} = res;
          if (success) {
            const oldData = state.VISITOR_LIST.data;
            const newData = oldData.map((item) => {
              item.isDefault = false;
              if (data.patientCardNo === item.patientCardNo) {
                item.isDefault = true;
              }
              return item;
            });
            commit(ACTION_TYPES.UPDATE_VISITOR_LIST_SUCCESS, newData);
          } else {
            commit(ACTION_TYPES.UPDATE_VISITOR_LIST_FAILURE);
          }
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
    const {value} = data;
    const oldData = state.VISITOR_LIST.data;
    commit(ACTION_TYPES.SELECT_VISITOR_LIST_REQUEST);
    return new Promise((resolve, reject) => {
      axios.post(apis.selectVisitorList, data)
        .then((res) => {
          res = res || {};
          const {data, success} = res;
          if (success) {
            const {rows} = data || {};
            const newData = value === 1 ? rows : oldData.concat(rows);
            commit(ACTION_TYPES.SELECT_VISITOR_LIST_SUCCESS, newData);
          } else {
            commit(ACTION_TYPES.SELECT_VISITOR_LIST_FAILURE);
          }
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
          res = res || {};
          const {data, success} = res;
          if (success) {
            const oldData = state.REGISTER_LIST.data;
            let newData = oldData.concat(data);
            if (pageIndex === 1) {
              newData = data;
              commit(ACTION_TYPES.SELECT_REGISTER_LIST_REQUEST);
            }
            commit(ACTION_TYPES.SELECT_REGISTER_LIST_SUCCESS, newData);
          } else {
            commit(ACTION_TYPES.SELECT_REGISTER_LIST_FAILURE);
          }
          resolve(res);
        })
        .catch((err) => {
          commit(ACTION_TYPES.SELECT_REGISTER_LIST_FAILURE);
          reject(err);
        });
    });
  },
  deleteRegisterList({commit, state}, data) {
    const {pageIndex} = data;
    return new Promise((resolve, reject) => {
      axios.post(apis.deleteRegisterList, data)
        .then((res) => {
          debugger;
          res = res || {};
          const {data, success} = res;
          if (success) {
            const oldData = state.REGISTER_LIST.data;
            let newData = oldData.concat(data);
            if (pageIndex === 1) {
              newData = data;
              commit(ACTION_TYPES.DELETE_REGISTER_LIST_REQUEST);
            }
            commit(ACTION_TYPES.DELETE_REGISTER_LIST_SUCCESS, newData);
          } else {
            commit(ACTION_TYPES.DELETE_REGISTER_LIST_FAILURE);
          }
          resolve(res);
        })
        .catch((err) => {
          commit(ACTION_TYPES.DELETE_REGISTER_LIST_FAILURE);
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
          res = res || {};
          const {data, success} = res;
          if (success) {
            const oldData = state.SUBSCRIBE_LIST.data;
            let newData = oldData.concat(data);
            if (pageIndex === 1) {
              newData = data;
              commit(ACTION_TYPES.SELECT_SUBSCRIBE_LIST_REQUEST);
            }
            commit(ACTION_TYPES.SELECT_SUBSCRIBE_LIST_SUCCESS, newData);
          } else {
            commit(ACTION_TYPES.SELECT_SUBSCRIBE_LIST_FAILURE);
          }
          resolve(res);
        })
        .catch((err) => {
          commit(ACTION_TYPES.SELECT_SUBSCRIBE_LIST_FAILURE);
          reject(err);
        });
    });
  },
  // 取消我的预约挂号
  deleteSubscribeList({commit, state}, data) {
    return new Promise((resolve, reject) => {
      const {value} = data;
      axios.post(apis.deleteSubscribeList, data)
        .then((res) => {
          res = res || {};
          const {success} = res;
          console.log('cancel');
          if (success) {
            const oldData = state.SUBSCRIBE_LIST.data;
            const newData = oldData.filter(item => value !== item.subscribeId);
            commit(ACTION_TYPES.DELETE_SUBSCRIBE_LIST_SUCCESS, newData);
          } else {
            commit(ACTION_TYPES.DELETE_SUBSCRIBE_LIST_FAILURE);
          }
          resolve(res);
        })
        .catch((err) => {
          console.log('fail');
          commit(ACTION_TYPES.DELETE_SUBSCRIBE_LIST_FAILURE);
          reject(err);
        });
    });
  },
  // 查询已支付记录-selectPaidList(新)
  selectIsPayedRecords({commit, state}, data) {
    const {pageIndex} = data;
    return new Promise((resolve, reject) => {
      axios.post(apis.selectPaymentRecord, data)
        .then((res) => {
          res = res || {};
          console.log(res);
          const {data, success} = res;
          if (success) {
            if (pageIndex === 1) {
              commit(ACTION_TYPES.SELECT_ISPAYED_RECORDS_REQUEST);
            }
            const oldData = state.ISPAYED_RECORDS.data;
            const newData = oldData.concat(data);
            commit(ACTION_TYPES.SELECT_ISPAYED_RECORDS_SUCCESS, newData);
          } else {
            commit(ACTION_TYPES.SELECT_ISPAYED_RECORDS_FAILURE);
          }
          resolve(res);
        })
        .catch((err) => {
          commit(ACTION_TYPES.SELECT_ISPAYED_RECORDS_FAILURE);
          reject(err);
        });
    });
  },
  // 查询未支付记录-selectUnpaidList(new)
  selectNoPayedRecords({commit, state}, data) {
    const {pageIndex} = data;
    return new Promise((resolve, reject) => {
      axios.post(apis.selectPaymentRecord, data)
        .then((res) => {
          res = res || {};
          const {data, success} = res;
          if (success) {
            if (pageIndex === 1) {
              commit(ACTION_TYPES.SELECT_NOPAYED_RECORDS_REQUEST);
            }
            const oldData = state.NOPAYED_RECORDS.data;
            const newData = oldData.concat(data);
            commit(ACTION_TYPES.SELECT_NOPAYED_RECORDS_SUCCESS, newData);
          } else {
            commit(ACTION_TYPES.SELECT_NOPAYED_RECORDS_FAILURE);
          }
          resolve(res);
        })
        .catch((err) => {
          commit(ACTION_TYPES.SELECT_NOPAYED_RECORDS_FAILURE);
          reject(err);
        });
    });
  },
  // 查询医生列表
  selectDoctorList({commit, state}, data) {
    commit(ACTION_TYPES.SELECT_DOCTOR_LIST_REQUEST);
    return new Promise((resolve, reject) => {
      axios.post(apis.selectDoctorList, data)
        .then((res) => {
          res = res || {};
          const {data, success} = res;
          if (success) {
            commit(ACTION_TYPES.SELECT_DOCTOR_LIST_SUCCESS, data);
          } else {
            commit(ACTION_TYPES.SELECT_DOCTOR_LIST_FAILURE);
          }
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
          res = res || {};
          const {data, success} = res;
          if (success) {
            commit(ACTION_TYPES.SELECT_REGISTER_PAY_SUCCESS, data);
          } else {
            commit(ACTION_TYPES.SELECT_REGISTER_PAY_FAILURE);
          }
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
          if (success) {
            const {parents, subgrades} = data;
            commit(ACTION_TYPES.SELECT_DEPARTMENT_SUCCESS, parents);
            commit(ACTION_TYPES.SELECT_SUB_DEPARTMENT_SUCCESS, subgrades);
          } else {
            commit(ACTION_TYPES.SELECT_DEPARTMENT_FAILURE);
            commit(ACTION_TYPES.SELECT_SUB_DEPARTMENT_FAILURE);
          }
          resolve(res);
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
          if (success) {
            commit(ACTION_TYPES.SELECT_SUB_DEPARTMENT_SUCCESS, data);
          } else {
            commit(ACTION_TYPES.SELECT_SUB_DEPARTMENT_FAILURE);
          }
          resolve(res);
        })
        .catch((err) => {
          commit(ACTION_TYPES.SELECT_SUB_DEPARTMENT_FAILURE);
          reject(err);
        });
    });
  },
  // 查询医生详情
  selectDoctorDetail({commit, state}, data) {
    commit(ACTION_TYPES.SELECT_DOCTOR_DETAIL_REQUEST);
    return new Promise((resolve, reject) => {
      axios.post(apis.selectDoctorDetail, data)
        .then((res) => {
          res = res || {};
          const {data, success} = res;
          if (success) {
            commit(ACTION_TYPES.SELECT_DOCTOR_DETAIL_SUCCESS, data);
          } else {
            commit(ACTION_TYPES.SELECT_DOCTOR_DETAIL_FAILURE);
          }
          resolve(res);
        })
        .catch((err) => {
          commit(ACTION_TYPES.SELECT_DOCTOR_DETAIL_FAILURE);
          reject(err);
        });
    });
  },
  // 查询科室详情
  selectDepartmentDetail({commit, state}, data) {
    commit(ACTION_TYPES.SELECT_DEPT_DETAIL_REQUEST);
    return new Promise((resolve, reject) => {
      axios.post(apis.selectDepartmentDetail, data)
        .then((res) => {
          res = res || {};
          const {data, success} = res;
          if (success) {
            commit(ACTION_TYPES.SELECT_DEPT_DETAIL_SUCCESS, data);
          } else {
            commit(ACTION_TYPES.SELECT_DEPT_DETAIL_FAILURE);
          }
          resolve(res);
        })
        .catch((err) => {
          commit(ACTION_TYPES.SELECT_DEPT_DETAIL_FAILURE);
          reject(err);
        });
    });
  },
  // 查询科室详情
  selectAppointmentCreate({commit, state}, data) {
    commit(ACTION_TYPES.SELECT_APPO_CREATE_REQUEST);
    return new Promise((resolve, reject) => {
      axios.post(apis.selectAppointmentCreate, data)
        .then((res) => {
          res = res || {};
          const {data, success} = res;
          if (success) {
            commit(ACTION_TYPES.SELECT_APPO_CREATE_SUCCESS, data);
          } else {
            commit(ACTION_TYPES.SELECT_APPO_CREATE_FAILURE);
          }
          resolve(res);
        })
        .catch((err) => {
          commit(ACTION_TYPES.SELECT_APPO_CREATE_FAILURE);
          reject(err);
        });
    });
  },
  // 查询检查报告列表
  selectReportList({commit, state}, data) {
    commit(ACTION_TYPES.SELECT_REPORT_LIST_REQUEST);
    return new Promise((resolve, reject) => {
      axios.post(apis.selectReportList, data)
        .then((res) => {
          const {data} = res;
          commit(ACTION_TYPES.SELECT_REPORT_LIST_SUCCESS, data);
          resolve(data);
        })
        .catch((err) => {
          commit(ACTION_TYPES.SELECT_REPORT_LIST_FAILURE);
          reject(err);
        });
    });
  },
  // 新增&修改健康档案
  insertHealthList({commit, state}, data) {
    commit(ACTION_TYPES.INSERT_HEALTH_LIST_REQUEST);
    return new Promise((resolve, reject) => {
      axios.post(apis.insertHealthList, data)
        .then((res) => {
          const {data, success} = res;
          if (data && success) {
            commit(ACTION_TYPES.INSERT_HEALTH_LIST_SUCCESS, data);
          }
          resolve(data);
        })
        .catch((err) => {
          commit(ACTION_TYPES.INSERT_HEALTH_LIST_FAILURE);
          reject(err);
        });
    });
  },
  // 查询健康档案
  selectHealthList({commit, state}, data) {
    commit(ACTION_TYPES.SELECT_HEALTH_LIST_REQUEST);
    return new Promise((resolve, reject) => {
      axios.post(apis.selectHealthList, data)
        .then((res) => {
          const {data} = res;
          commit(ACTION_TYPES.SELECT_HEALTH_LIST_SUCCESS, data);
          resolve(data);
        })
        .catch((err) => {
          commit(ACTION_TYPES.SELECT_HEALTH_LIST_FAILURE);
          reject(err);
        });
    });
  }
};

export default actions;
