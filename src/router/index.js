
import { createRouter, createWebHistory } from 'vue-router'
const routerHistory = createWebHistory()

import login from '../views/login/index.vue'
import home from '../views/home/index.vue'

console.log(login)

// console.log(login)

// const login = '111'

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


// const routes = [
//   { path:"", redirect:{ name:"login" } },
//   { path:"/login", name:"login", component: login },
// ];


// const router = createRouter({
//   history: createWebHistory(),
//   routes
// });


const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: home,
      name: 'home'
    },
    {
      path: '/login',
      component: login,
      name: 'login'
    }
  ]
})


export default router



