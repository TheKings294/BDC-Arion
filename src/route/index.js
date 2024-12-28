// src/route/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Team  from '../components/Team.vue'
import home from '../components/home.vue'

const routes = [
    {path: '/', name: 'team', component: Team},
    {path: '/home', name: 'home', component: home}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  })
  
export default router