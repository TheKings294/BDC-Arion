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
  { path: "/", name: "home", component: () => import("@/components/home.vue") },
  {
    path: "/about",
    name: "Qui sommes nous",
    component: () => import("@/components/about.vue"),
  },
  {
    path: "/why_me",
    name: "Pourquoi nous",
    component: () => import("@/components/why_me.vue"),
  },
  {
    path: "/partner",
    name: "Partenariat",
    component: () => import("@/components/partner.vue"),
  },
  {
    path: "/events",
    name: "Événements",
    component: () => import("@/components/event.vue"),
  },
  {
    path: "/form",
    name: "Formulaire",
    component: () => import("@/components/form.vue"),
  },
  {
    path: "/spring_jump",
    name: "Spring Jump",
    component: () => import("@/components/spring_jump.vue"),
  },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  })

  router.beforeEach((to, from, next) => {
    if (to.path === "/") {
      document.body.style.backgroundColor = document.body.style.background =
        "#1c1c1e";
    } else {
      document.body.style.backgroundColor = "#f0f5f9";
    }
    next();
  });

export default router
