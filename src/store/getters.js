const getters = {
  token: state => state.user.token,
  name: state => state.user.name,
  routers: state => state.permissions.routers
}

export default getters
