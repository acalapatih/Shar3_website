import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/eventlist',
    name: 'eventlist',
    component: () => import('../views/EventList.vue')
  },
  {
    path: '/aboutus',
    name: 'aboutus',
    component: () => import('../views/AboutUs.vue')
  },
  {
    path: '/articlelist',
    name: 'articlelist',
    component: () => import('../views/ArticleList.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
