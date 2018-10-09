import Vue from 'vue';
import Vuex from 'vuex';
import States from './states';
import Actions from './actions';
import Getters from './getters';
import Mutations from './mutations';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: States,
  action: Actions,
  getter: Getters,
  mutations: Mutations
});

export default store;
