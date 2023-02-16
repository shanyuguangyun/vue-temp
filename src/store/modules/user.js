import {login} from '@/api/login'
import {setToken} from '@/utils/auth'

const user = {
  state: {
    token: '',
    name: '',
    id: ''
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },
  actions: {
    Login({commit}, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({ username: username.trim(), password: password }).then(response => {
          console.log("登录返回" + response)
          const { data } = response
          commit('SET_TOKEN', data.token)
          setToken(data.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user
