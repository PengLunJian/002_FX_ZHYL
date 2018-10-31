import Vue from 'vue';
import Vuex from 'vuex';
import States from './states';
import Actions from './actions';
import Mutations from './mutations';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: States,
  actions: Actions,
  mutations: Mutations
});

export default store;
