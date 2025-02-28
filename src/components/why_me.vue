<script setup>
import { Lightbulb, Handshake, HandHeart } from "lucide-vue-next";
</script>

<template>
  <div class="container text-center py-5">
    <h1 class="display-4 fw-bold">Pourquoi nous ?</h1>
  </div>

  <div class="container-fluid bg-light py-5">
    <div class="container">
      <div class="row justify-content-center gy-4">
        <!-- Carte Innovation -->
        <div class="col-md-6 col-lg-4">
          <div class="card shadow-sm text-center p-4 animate-card">
            <Lightbulb class="icon-hover" size="60" />
            <h2 class="fs-3 fw-semibold mt-3">Innovation</h2>
            <p class="mt-2">
              Le Bureau des Cavaliers et le Parcours Cavaliers ont su se démarquer en France en étant des précurseurs dans le domaine équestre pour l’éducation.
            </p>
          </div>
        </div>

        <!-- Carte Inclusion -->
        <div class="col-md-6 col-lg-4">
          <div class="card shadow-sm text-center p-4 animate-card">
            <HandHeart class="icon-hover" size="60" />
            <h2 class="fs-3 fw-semibold mt-3">Inclusion</h2>
            <p class="mt-2">
              L’objectif du Bureau des Cavaliers consiste à promouvoir tous les cavaliers, en mettant l’accent sur la pratique handisport, incluant des athlètes paralympiques.
            </p>
          </div>
        </div>

        <!-- Carte Respect -->
        <div class="col-md-6 col-lg-4">
          <div class="card shadow-sm text-center p-4 animate-card">
            <Handshake class="icon-hover" size="60" />
            <h2 class="fs-3 fw-semibold mt-3">Respect</h2>
            <p class="mt-2">
              Le respect est une valeur fondamentale pour le Bureau des Cavaliers, qui s’efforce de garantir un traitement approprié à chacun et à chaque cheval.
            </p>
          </div>
        </div>
      </div>

      <div class="text-center mt-5">
        <p class="fw-bold fs-5 text-secondary">Soutenir le Bureau des Cavalières, c’est soutenir ses valeurs.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Animation des cartes */
.animate-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: none;
}

.animate-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

g.icon-hover {
  transition: transform 0.3s ease;
}

.icon-hover:hover {
  transform: scale(1.1);
}
</style>
