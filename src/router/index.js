import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Layout from '@/views/layout'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'home',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'index',
        component: () => import('../views/home')
      },
      {
        path: '/question',
        name: 'question',
        component: () => import('../views/question')
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('../views/video')
      },
      {
        path: '/',
        name: 'user',
        component: () => import('../views/user')
      }
    ]
  },
  {
    path: '/user/profile',
    name: 'profile',
    component: () => import('../views/userProfile')
  },
  {
    path: '/user/chat',
    name: 'chat',
    component: () => import('../views/userChat')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/search')
  },
  {
    path: '/search/result',
    name: 'searchResult',
    component: () => import('../views/searchResult')
  },
  {
    path: '/article',
    name: 'article',
    component: () => import('../views/article')
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
