import apis from '../apis';
import axios from '../axios/axios';
import * as ACTION_TYPES from './actionTypes';

export const updateDefaultCardFun = (data) => {
  return {
    type: 'updateDefaultCard',
    data: data
  };
};
export const clearVisitorListData = (data) => {
  return {
    type: 'clearVisitorList',
    data: data
  };
};
export const insertVisitorListFun = (data) => {
  return {
    type: 'insertVisitorList',
    data: data
  };
};
export const deleteVisitorListFun = (data) => {
  return {
    type: 'deleteVisitorList',
    data: data
  };
};
export const updateVisitorListFun = (data) => {
  return {
    type: 'updateVisitorList',
    data: data
  };
};
export const selectVisitorListFun = (data) => {
  return {
    type: 'selectVisitorList',
    data: data
  };
};
export const clearRegisterListFun = (data) => {
  return {
    type: 'clearRegisterList',
    data: data
  };
};
export const selectRegisterListFun = (data) => {
  return {
    type: 'selectRegisterList',
    data: data
  };
};
export const clearSubscribeListFun = (data) => {
  return {
    type: 'clearSubscribeList',
    data: data
  };
};
export const selectSubscribeListFun = (data) => {
  return {
    type: 'selectSubscribeList',
    data: data
  };
};
export const clearPaymentRecordsFun = (data) => {
  return {
    type: 'clearPaymentRecords',
    data: data
  };
};
export const selectPaymentRecordsFun = (data) => {
  return {
    type: 'selectPaymentRecords',
    data: data
  };
};

const actions = {
  // 查询默认就诊卡
  selectDefaultCard({commit}) {
    commit(ACTION_TYPES.SELECT_DEFAULT_CARD_REQUEST);
    return axios.post(apis.selectDefaultCard)
      .then((res) => {
        const {data} = res;
        commit(ACTION_TYPES.SELECT_DEFAULT_CARD_SUCCESS, data);
        return data;
      })
      .catch((err) => {
        const {data} = err;
        commit(ACTION_TYPES.SELECT_DEFAULT_CARD_FAILURE, data);
      });
  },
  clearVisitorList({commit}, {data}) {
    if (data === 1) {
      commit(ACTION_TYPES.CLEAR_VISITOR_LIST, []);
    }
  },
  insertVisitorList({commit, state}, {data}) {
    if (!data) return;
    const {VISITOR_LIST} = state;
    const {LIST} = VISITOR_LIST;
    LIST.map((item) => {
      item.isDefault = false;
    });
    const newData = LIST.concat(data);
    commit(ACTION_TYPES.INSERT_VISITOR_LIST, newData);
  },
  deleteVisitorList({commit, state}, {data}) {
    const {VISITOR_LIST} = state;
    const {LIST} = VISITOR_LIST;
    const newData = LIST.filter(item => item.patientCardNo !== data);
    commit(ACTION_TYPES.DELETE_VISITOR_LIST, newData);
  },
  updateVisitorList({commit, state}, {data}) {
    const {VISITOR_LIST} = state;
    const {LIST} = VISITOR_LIST;
    LIST.map((item) => {
      item.isDefault = false;
      if (item.patientCardNo === data) {
        item.isDefault = true;
      }
    });
    commit(ACTION_TYPES.UPDATE_VISITOR_LIST, LIST);
  },
  selectVisitorList({commit, state}, {data}) {
    if (!data || !data.length) return;
    const {VISITOR_LIST} = state;
    const {LIST} = VISITOR_LIST;
    const newData = LIST.concat(data);
    commit(ACTION_TYPES.SELECT_VISITOR_LIST, newData);
  },
  clearRegisterList({commit, state}, {data}) {
    if (data === 1) {
      commit(ACTION_TYPES.CLEAR_REGISTER_LIST, []);
    }
  },
  selectRegisterList({commit, state}, {data}) {
    if (!data || !data.length) return;
    const {REGISTER_LIST} = state;
    const {list} = REGISTER_LIST;
    const newData = list.concat(data);
    commit(ACTION_TYPES.SELECT_REGISTER_LIST, newData);
  },
  clearSubscribeList({commit, state}, {data}) {
    if (data === 1) {
      commit(ACTION_TYPES.CLEAR_SUBSCRIBE_LIST, []);
    }
  },
  selectSubscribeList({commit, state}, {data}) {
    if (!data || !data.length) return;
    const {SUBSCRIBE_LIST} = state;
    const {list} = SUBSCRIBE_LIST;
    const newData = list.concat(data);
    commit(ACTION_TYPES.SELECT_SUBSCRIBE_LIST, newData);
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
    // return axios.post(url, data)
    //   .then((res) => {
    //     const {data} = res;
    //     if (pageIndex === 1) {
    //       commit(ACTION_TYPES.SELECT_ISPAYED_RECORDS_REQUEST);
    //     }
    //     const oldData = state.ISPAYED_RECORDS.data;
    //     const newData = oldData.concat(data);
    //     commit(ACTION_TYPES.SELECT_ISPAYED_RECORDS_SUCCESS, newData);
    //     return data;
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     commit(ACTION_TYPES.SELECT_ISPAYED_RECORDS_FAILURE);
    //   });
  },
  // 查询未支付记录
  selectNoPayedRecords({commit, state}, data) {
    const {pageIndex} = data;
    return axios.post(apis.selectPaymentRecord, data)
      .then((res) => {
        const {data} = res;
        if (pageIndex === 1) {
          commit(ACTION_TYPES.SELECT_NOPAYED_RECORDS_REQUEST);
        }
        const oldData = state.NOPAYED_RECORDS.data;
        const newData = oldData.concat(data);
        commit(ACTION_TYPES.SELECT_NOPAYED_RECORDS_SUCCESS, newData);
        return data;
      })
      .catch((err) => {
        const {data} = err;
        commit(ACTION_TYPES.SELECT_NOPAYED_RECORDS_FAILURE, data);
      });
  }
};

export default actions;
