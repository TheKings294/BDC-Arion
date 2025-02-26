<script setup>
import { ref } from "vue";

// Définition des images du carousel dans un tableau dynamique
const carouselImages = ref([
  { src: "/assets/img/carousel/e.webp", alt: "Événement équestre - Image 1" },
  { src: "../aDssets/img/carousel/b.webp", alt: "Événement équestre - Image 2" },
  { src: "../asseDts/img/carousel/c.webp", alt: "Événement équestre - Image 3" },
  { src: "../assetDs/img/carousel/d.webp", alt: "Événement équestre - Image 4" },
  { src: "../assetsD/img/carousel/e.webp", alt: "Événement équestre - Image 5" }
]);
</script>

<template>
  <div class="container-fluid">

    <!-- Section Bannière -->
    <div class="row py-5 d-flex align-items-center">
      <div class="col-md-7 d-flex justify-content-center">
        <img
          src="../assets/img/poney.avif"
          alt="Poney illustrant l'univers équestre"
          class="img-fluid"
          style="max-width: 400px; height: auto;"
          loading="lazy"
        />
      </div>
      <div class="col-md-5 text-center text-white">
        <h1 class="display-2 text-uppercase fw-bold">ARION</h1>
        <h2 class="display-2 text-uppercase fw-bold">Bureau des cavaliers</h2>
        <p class="fs-3 text-warning">Vivez l’excellence événementielle</p>
        <p class="fs-3">à travers l’univers équestre</p>
      </div>
    </div>

    <!-- Section Citation du Président -->
    <div class="row py-5 mt-5">
      <div class="col-12 d-flex flex-column flex-md-row align-items-center justify-content-center gap-4 gap-md-5">

        <!-- Image du président -->
        <div class="col-auto">
          <img
            src="../assets/img/persons/mot-de-la-presidente.avif"
            alt="Président du Bureau des Cavaliers"
            class="img-fluid rounded-circle shadow-lg president-img"
            loading="lazy"
          />
        </div>

        <!-- Citation -->
        <div class="col-12 col-md-8">
          <blockquote class="blockquote p-4 bg-white border-start border-4 border-primary rounded shadow-sm">
            <i class="bi bi-quote display-3 text-primary opacity-25 position-absolute top-0 start-0 translate-middle"></i>
            <p class="mb-0 fw-light fst-italic text-dark">
              "Guidés par notre vision commune de promouvoir l’excellence des sports équestres et l’innovation du domaine sportif, nous créons un événement unique en son genre qui fusionne tradition, inclusion et modernité."
            </p>
            <footer class="blockquote-footer text-end mt-3 text-muted">Président du Bureau des Cavaliers</footer>
          </blockquote>
        </div>

      </div>
    </div>

    <!-- Section Carousel -->
    <div class="container">
      <div id="carousel-main-page" class="carousel slide carousel-fade carousel-dark" data-bs-ride="carousel">

        <div class="carousel-inner">
          <div v-for="(image, index) in carouselImages" :key="index" class="carousel-item" :class="{ active: index === 0 }">
            <img :src="image.src" class="d-block w-100" :alt="image.alt" loading="lazy">
          </div>
        </div>

        <!-- Boutons de navigation -->
        <button class="carousel-control-prev" type="button" data-bs-target="#carousel-main-page" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Précédent</span>
        </button>

        <button class="carousel-control-next" type="button" data-bs-target="#carousel-main-page" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Suivant</span>
        </button>

      </div>
    </div>

    <!-- Section Publications Réseaux Sociaux -->
    <div class="text-center my-5">
      <h1>Nos dernières publications</h1>
      <img src="" alt="Aperçu de nos publications sur les réseaux sociaux" class="img-fluid" loading="lazy">
    </div>

  </div>
</template>



<style scoped>
/* Ajustement des images */
.carousel-inner img {
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  max-height: 600px;
}

/* Limite la hauteur du carousel */
#carousel-main-page {
  max-height: 600px;
}

/* Style de l'image du président */
.president-img {
  width: 160px;
  height: 160px;
  object-fit: cover;
  border: 4px solid #007bff;
  transition: transform 0.3s ease;
}
</style>
