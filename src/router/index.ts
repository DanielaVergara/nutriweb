import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/public-layout/Register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/public-layout/Login.vue')
  }
  ,
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/public-layout/About.vue')
  }
  ,
  {
    path: '/comments',
    name: 'Comments',
    component: () => import('../views/public-layout/Comments.vue')
  }
  ,
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('../views/public-layout/SignUp.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
