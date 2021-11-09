import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Home,
    meta: {
      layout:"Guest"
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: import(/*webpackChunkName:'register'*/ '@/views/Register.vue'),
    meta: {
      layout:"Guest"
    }
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
