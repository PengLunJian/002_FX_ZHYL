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
  updateDefaultCard({commit}, {data}) {
    if (!data || typeof data !== 'object') return;
    commit(ACTION_TYPES.UPDATE_DEFAULT_CARD, data);
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
  clearPaymentRecords({commit, state}, {data}) {
    const {payStatus} = data;
    commit(ACTION_TYPES.CLEAR_PAYMENT_RECORDS, payStatus);
  },
  selectPaymentRecords({commit, state}, {data}) {
    const {list, payStatus} = data;
    if (!list || !list.length) return;
    const {PAYMENT_RECORD} = state;
    const oldData = PAYMENT_RECORD.data[payStatus].list;
    const newData = oldData.concat(list);
    data = Object.assign(data, {list: newData});
    commit(ACTION_TYPES.SELECT_PAYMENT_RECORDS, data);
  }
};

export default actions;
