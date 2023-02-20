import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'

Vue.use(Router)

export const asyncRoutes = [{}]

export const currencyRoutes = [{
    path: '/404',
    name: '404',
    hidden: true,
    meta: {
      title: '404',
    },
    component: () => import('@/views/404')
  },
  {
    path: '/login',
    name: 'Login',
    hidden: true,
    meta: {
      title: 'login',
    },
    component: () => import('@/views/login/index')
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('@/views/Dashboard'),
      meta: {
        title: '看板',
        icon: 'el-icon-s-home'
      }
    }]
  },
  {
    path: '/document',
    component: Layout,
    children: [{
      path: 'index',
      name: 'Index',
      component: () => import('@/views/Document'),
      meta: {
        title: '文档',
        icon: 'el-icon-folder-opened'
      }
    }]
  },
  {
    path: '/functions',
    component: Layout,
    meta: {
      title: '功能',
      icon: 'el-icon-s-platform'
    },
    children: [{
      path: 'add',
      name: 'Add',
      component: () => import('@/views/Functions/add'),
      meta: {
        title: '新增'
      }
    }, {
      path: 'update',
      name: 'Update',
      component: () => import('@/views/Functions/update'),
      meta: {
        title: '更新'
      }
    }]
  }
]

const creatRouter = () => {
  return new Router({
    routes: currencyRoutes,
    scrollBehavior() {
      return { x: 0, y: 0 }
    }
  })
}


const router = creatRouter()

// 解决addRoute不能删除动态路由问题
export function resetRouter() {
  const reset = creatRouter()
  router.matcher = reset.matcher
}

export default router
