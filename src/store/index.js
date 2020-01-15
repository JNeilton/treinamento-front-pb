import Vue from 'vue'
import Vuex from 'vuex'

import vuexDemo from './modules/vuex-demo'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    vuexDemo,
  },
})
