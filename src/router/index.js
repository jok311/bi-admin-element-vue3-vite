
import { createRouter, createWebHistory } from 'vue-router'
const routerHistory = createWebHistory()


/* Layout */
// import Layout from 'views/layout/index'

//不需要权限控制的路由
// const AllRoutes = [
//   // 登陆页面路由
//   {
//     path: '/login',
//     component: import('../views/login/index'),
//   },
// ];


const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: import('../views/login/index'),
    },
    {
      path: '/login',
      component: import('../views/login/index'),
    }
  ]
})

export default router



