// src/route/index.js
import { createRouter, createWebHistory } from 'vue-router'
import home from '../components/home.vue'
import about from '../components/about.vue'
import why_me from '../components/why_me.vue'
import partner from '../components/partner.vue'
import event from '../components/event.vue'
import form from '../components/form.vue'
import spring_jump from '../components/spring_jump.vue'

const routes = [
    {path: '/', name: 'home', component: home},
    {path: '/about', name: 'Qui sommes nous', component: about},
    {path: '/why_me', name: 'Pourquoi nous', component: why_me},
    {path: '/partner', name: 'Partenaria', component: partner},
    {path: '/events', name: 'Evenements', component: event},
    {path: '/form', name: 'Formulaire', component: form},
    {path: '/spring_jump', name: 'Spring_jump', component: spring_jump},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  })
  
export default router