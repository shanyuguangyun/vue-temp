import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/404',
      hidden: true,
      component: () => import('@/views/404')
    },
    {
      path: '/login',
      hidden: true,
      component: () => import('@/views/login/index')
    },
    {
      path: '',
      component: Layout,
    }
  ]
})
