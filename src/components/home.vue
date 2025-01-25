<script setup>

</script>

<template>
  <div id="main-page-top" class="d-flex align-items-center justify-content-between">
    <img src="../assets/img/photo%20fond%20noir.webp" alt="Image de cheval" id="horse-img">
    <div id="text-horse-img">
      <h1>ARION</h1>
      <p>Bureau des cavaliers</p>
      <p>Vivez l’excellence événementielle</p>
      <p>à travers l’univers équestre</p>
    </div>
  </div>
  <div id="president-message" class="d-flex align-items-center justify-content-between mt-5 mb-3">
    <div class="me-1">
      <img src="../assets/img/persons/mot%20de%20la%20presidente.jpg" alt="president bureau des cavaliers" id="president-img-home">
    </div>
    <div class="me-5" id="president-txt-home">
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim </p>
    </div>
  </div>
  <div id="carousel-main-page" class="carousel slide carousel-fade carousel-dark" data-bs-ride="true">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../assets/img/carousel/première%20photo%20carroussel%20page%20daccueil.webp" class="d-block w-100" alt="Image Carousel">
      </div>
      <div class="carousel-item">
        <img src="../assets/img/carousel/photo%20carroussel%20page%20daccueil.webp" class="d-block w-100" alt="Image Carousel">
      </div>
      <div class="carousel-item">
        <img src="../assets/img/carousel/photo%20carroussel%20page%20daccueil%203.webp" class="d-block w-100" alt="Image Carousel">
      </div>
      <div class="carousel-item">
        <img src="../assets/img/carousel/photo%20carroussel%20page%20daccueil%204.webp" class="d-block w-100" alt="Image Carousel">
      </div>
      <div class="carousel-item">
        <img src="../assets/img/carousel/photo%20carroussel%20page%20daccueil%205.webp" class="d-block w-100" alt="Image Carousel">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carousel-main-page" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carousel-main-page" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <div id="social-media" class="mt-5 d-flex justify-content-center flex-wrap">
    <h1 class="text-center" style="flex-basis: 100%">Nos dernière publication</h1>
    <div>
      <img src="" alt="réseau sociaux">
    </div>
  </div>
</template>

<style scoped>
#horse-img {
  width: 500px;
  height: auto;
  margin-left: 150px;
}
#text-horse-img {
  margin-right: 200px;
}
#president-img-home {
  width: 200px;
  height: auto;
  clip-path:ellipse(50% 40%);
  margin-left: 20rem;
}
#president-txt-home {
  padding-left: 7rem;
  padding-right: 7rem;
}
</style>