import router from './router'
import store from './store'

router.beforeEach((to, from, next) => {
  debugger
  if (to.path === '/login') {
    next()
  } else {
    if (store.getters.isLogin) {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  }
})
