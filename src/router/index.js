
import { createRouter, createWebHistory } from 'vue-router'
const routerHistory = createWebHistory()


/* Layout */
import Layout from '../views/layout/index.vue'

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
      component: () => import('../views/home/index.vue'),
      name: 'home'
    },
    {
      path: '/login',
      component: () => import('../views/login/index.vue'),
      name: 'login'
    },
    {
      path: '/dash',
      component: Layout,
      redirect: '/dash/template',
      children: [
        {
          path: 'template',
          component: () => import('../views/pages/dash-template/index.vue'),
          name: 'DashTemplate',
          meta: { title: 'DashTemplate', affix: true }
        },
        {
          path: 'box',
          component: () => import('../views/pages/dash/index.vue'),
          name: 'DashBox',
          meta: { title: 'DashBox', affix: true }
        },
      ]
    },

  ]
})


export default router



