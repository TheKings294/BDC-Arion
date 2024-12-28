// src/route/index.js
import { createRouter, createWebHistory } from 'vue-router'
import home from '../components/home.vue'
import about from '../components/about.vue'
import why_me from '../components/why_me.vue'
import partner from '../components/partner.vue'
import event from '../components/event.vue'

const routes = [
    {path: '/', name: 'home', component: home},
    {path: '/about', name: 'Qui sommes nous', component: about},
    {path: '/why_me', name: 'Pourquoi nous', component: why_me},
    {path: '/partner', name: 'Partenaria', component: partner},
    {path: '/events', name: 'Evenements', component: event},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  })
  
export default router