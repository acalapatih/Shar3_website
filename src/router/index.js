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
  },
  {
    path: '/articledetail',
    name: 'articledetail',
    component: () => import('../views/ArticleDetail.vue')
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: () => import('../views/Calendar.vue')
  },
  {
    path: '/daftarsaqu',
    name: 'daftarsaqu',
    component: () => import('../views/DaftarSaqu.vue')
  },
  {
    path: '/documentation',
    name: 'documentation',
    component: () => import('../views/Documentation.vue')
  },
  {
    path: '/shar3store',
    name: 'shar3store',
    component: () => import('../views/Shar3Store.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
