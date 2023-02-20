import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import permissions from './modules/permissions'
import app from './modules/app'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    permissions,
    app
  },
  getters
})

export default store
