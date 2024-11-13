// src/route/index.js

import { createRouter, createWebHistory } from 'vue-router'
import Team from '@/Team.vue'

const routes = [
      {
        path: '/Team',
        name: 'About',
        component: About
      }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router