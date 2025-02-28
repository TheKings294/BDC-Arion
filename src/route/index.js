import { createRouter, createWebHistory } from "vue-router";

// Définition des routes
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

// Création du router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Fonction pour appliquer les styles dynamiquement
const applyStyles = (isHome) => {
  const bodyColor = isHome ? "#1E1E1E" : "#FAFAFA";
  const headerFooterColor = isHome ? "#252525" : "#FFFFFF";
  const textColor = isHome ? "#EAEAEA" : "#333333";

  const boxShadow = isHome
    ? "0px 4px 10px rgba(255, 255, 255, 0.08)" // Effet lumineux subtil pour le header/footer sombre
    : "0px 4px 10px rgba(0, 0, 0, 0.1)"; // Ombre douce pour le header/footer clair

  const border = isHome
    ? "1px solid rgba(255, 255, 255, 0.1)" // Séparation fine pour un fond sombre
    : "1px solid rgba(0, 0, 0, 0.08)"; // Séparation fine pour un fond clair

  // Appliquer les styles au body
  document.body.style.backgroundColor = bodyColor;
  document.body.style.color = textColor;

  // Sélectionner header et footer et leur appliquer les styles
  [document.querySelector("header"), document.querySelector("footer")].forEach(
    (element) => {
      if (element) {
        Object.assign(element.style, {
          backgroundColor: headerFooterColor,
          color: textColor,
          boxShadow: boxShadow,
          borderBottom: border,
          transition:
            "background-color 0.3s ease, box-shadow 0.3s ease, color 0.3s ease, border-bottom 0.3s ease",
        });
      }
    }
  );
};

// Middleware avant chaque changement de route
router.beforeEach((to, from, next) => {
  applyStyles(to.path === "/");
  next();
});

export default router;
