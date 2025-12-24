import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'

const routes = [
  {
    path: '/:id?',
    name: 'Event',
    component: App,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router