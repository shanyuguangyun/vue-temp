import {login} from '@/api/login'
import {Message} from 'element-ui'
import {setToken} from '@/utils/auth'
import router, {resetRouter} from '@/router'

const state = {
  token: localStorage.getItem('token') ? localStorage.getItem('token') : '', // 认证凭证'
  username: '',
  roles: [],
  introduce: '',
  userid: null
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  DEL_TOKEN(state) {
    state.token = ''
    state.username = ''
    state.roles = ''
    state.introduce = ''
    state.userid = null
    localStorage.removeItem('token')
  },
  SET_ROLES(state, payload) {
    state.roles = payload
  },
  SET_USERNAME(state, payload) {
    state.username = payload
  },
  SET_USERID(state, payload) {
    state.userid = payload
  },
  SET_INTRODUCE(state, payload) {
    state.introduce = payload
  }
}
const actions = {
  Login({commit}, userInfo) {
    const {username,password} = userInfo
    return new Promise((resolve, reject) => {
      login({
        username: username.trim(),
        password: password
      }).then(response => {
        const {data } = response
        commit('SET_TOKEN', data.token)
        commit('SET_USERNAME', data.username)
        commit('SET_USERID', data.id)
        setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  LoginOut({commit}) {
    commit('DEL_TOKEN')
    resetRouter()
    router.push({
      path: '/login',
      query: {
        redirect: '/'
      }
    })
  },
  GetUserInfo({commit}) {

  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
