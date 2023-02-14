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
  }
}

export default user
