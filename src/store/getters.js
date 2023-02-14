const getters = {
  token: state => state.user.token,
  name: state => state.user.name,
  isLogin: (state) => {
    return state.user.name.length > 0
  }
}

export default getters
