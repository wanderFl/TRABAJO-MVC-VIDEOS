import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Inicio
    },
  ]
})

export default router
