const getters = {
  token: state => state.user.token,
  username: state => state.user.username,
  userid: state => state.user.userid,
  routes: state => state.permissions.routes,
  msgIsShow: state => state.app.msgIsShow,
  showDriver: state => state.app.showDriver,
  opened: state => {
    if (state.app.opened === 'false') {
      return false
    } else if (state.app.opened === 'true') {
      return true
    }
  },
}

export default getters
