import Vue from 'vue'
import Vuex from 'vuex'
import Mutations from './mutations'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    TEXT: '加载中',
    LOADING: false
  },
  mutations: Mutations
})

export default store
