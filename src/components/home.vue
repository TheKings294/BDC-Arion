<script setup>
document.querySelector("body").style.background = "#000";
</script>

<template>
<div class="container-fluid">
  <div class="row py-5 d-flex align-items-center py-5">
    <div class="col-7 d-flex justify-content-center">
      <img
        src="../assets/img/image.png"
        alt="Image de cheval"
        id="horse-img"
        class="img-fluid col-8"
      />
    </div>
    <div class="col-5 text-center text-white">
      <p class="display-2 text-uppercase">ARION</p>
      <p class="display-2 text-uppercase ">Bureau des cavaliers</p>
      <p class="fs-3 text-warning">Vivez l’excellence événementielle</p>
      <p class="fs-3">à travers l’univers équestre</p>
    </div>
  </div>

  <div class="row py-5 mt-5 ">
    <div class="col-12 d-flex align-items-center justify-content-center gap-5">
      <div class="me-1 col-1">
        <img
          src="../assets/img/persons/mot%20de%20la%20presidente.jpg"
          alt="president bureau des cavaliers"
          id="president-img-home"
          class="img-fluid w-100 h-100 rounded-circle"
        />
      </div>
      <div class="col-6 d-flex justify-end align-content-end">
        <blockquote class="blockquote">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </blockquote>
      </div>
    </div>
  </div>

<div class="row py-5" >
  <div
  id="carousel-main-page"
  class="carousel slide carousel-fade carousel-dark"
  data-bs-ride="carousel"
>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img
        src="../assets/img/carousel/a.webp"
        class="d-block w-100 img-fluid"
        alt="Image Carousel"
      />
    </div>
    <div class="carousel-item">
      <img
        src="../assets/img/carousel/b.webp"
        class="d-block w-100 img-fluid"
        alt="Image Carousel"
      />
    </div>
    <div class="carousel-item">
      <img
        src="../assets/img/carousel/c.webp"
        class="d-block w-100 img-fluid"
        alt="Image Carousel"
      />
    </div>
    <div class="carousel-item">
      <img
        src="../assets/img/carousel/d.webp"
        class="d-block w-100 img-fluid"
        alt="Image Carousel"
      />
    </div>
    <div class="carousel-item">
      <img
        src="../assets/img/carousel/e.webp"
        class="d-block w-100 img-fluid"
        alt="Image Carousel"
      />
    </div>
  </div>

  <button
    class="carousel-control-prev"
    type="button"
    data-bs-target="#carousel-main-page"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden fw-bold">Previous</span>
  </button>

  <button
    class="carousel-control-next"
    type="button"
    data-bs-target="#carousel-main-page"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

</div>
  <div class="">
    <h1 class="text-center" style="flex-basis: 100%">
      Nos dernière publication
    </h1>
    <div>
      <img src="" alt="réseau sociaux" />
    </div>
  </div>
  </div>
</template>

<style scoped>
/* Ajustement des styles de l'image et du texte */
#horse-img {
  object-fit: cover;
}

#text-align-center {
  text-align: right;
  color: white;
  max-width: 50%;
}
</style>
