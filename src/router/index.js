import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'

Vue.use(Router)

export const constantRouterMap = [{
    path: '/404',
    name: '404',
    hidden: false,
    meta: {
      title: '404',
    },
    component: () => import('@/views/404')
  },
  {
    path: '/login',
    name: 'Login',
    hidden: false,
    meta: {
      title: 'login',
    },
    component: () => import('@/views/login/index')
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [{
      path: '/home',
      name: 'Home',
      component: () => import('@/views/Home')
    }]
  }
]

export default new Router({
  routes: constantRouterMap
})
