import * as TYPES from './actionTypes';

const actions = {
  updateDefaultCard({commit}, {data}) {
    commit(TYPES.UPDATE_DEFAULT_CARD, data);
  }
};

export default actions;
