import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'

const routes = [
  {
    path: '/:id',
    name: 'Event',
    component: App,
    props: true
  },
  {
    path: '/',
    redirect: '/event0'
  },
  {
    // 404 路由
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router