import { createRouter, createWebHistory } from 'vue-router'
import Characters from '../views/Characters'

const routes = [
  {
    // 人物志
    path: '/',
    name: 'Characters',
    component: Characters
  },
  {
    // 赛事列表
    path: '/event',
    name: 'Events',
    component: () => import('../views/Events')
  },
  {
    // 吴老师课程
    path: '/course',
    name: 'Courses',
    component: () => import('../views/Courses')
  },
  {
    // VJudge题集
    path: '/vJudge',
    name: 'VJudges',
    component: () => import('../views/VJudges')
  },
  {
    // ICPC私云
    path: '/cloud',
    name: 'Cloud',
    component: () => import('../views/Cloud')
  },
  // {
  //   // 关于
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('../views/About')
  // },
  {
    // 登录
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login')
  },
  // {
  //   // 管理页面
  //   path: '/administrator',
  //   name: 'Admin',
  //   component: () => import('../views/AdminPages')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
