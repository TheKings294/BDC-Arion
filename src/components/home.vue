<template>
  <div class="container-fluid">

    <!-- Section Bannière -->
    <div class="row py-5 d-flex align-items-center">
      <div class="col-md-7 d-flex justify-content-center">
        <img
          src="../assets/img/poney.webp"
          alt="Image de cheval"
          class="img-fluid col-md-6"
        />
      </div>
      <div class="col-md-5 text-center text-white">
        <h1 class="display-2 text-uppercase">ARION</h1>
        <h2 class="display-2 text-uppercase">Bureau des cavaliers</h2>
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
            src="../assets/img/persons/mot-de-la-presidente.webp"
            alt="Président du Bureau des Cavaliers"
            class="img-fluid rounded-circle shadow-lg"
            style="width: 160px; height: 160px; object-fit: cover; border: 4px solid #007bff; transition: transform 0.3s ease;"
          />
        </div>

        <!-- Citation -->
        <div class="col-12 col-md-8">
          <blockquote class="blockquote p-4 bg-white border-start border-4 border-primary rounded shadow-sm position-relative" style="font-family: 'Georgia', serif; font-size: 1.2rem; line-height: 1.6;">
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
    <div class="row py-5">
      <div id="carousel-main-page" class="carousel slide carousel-fade carousel-dark" data-bs-ride="carousel">

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../assets/img/carousel/a.webp" class="d-block w-100" alt="Image Carousel">
          </div>
          <div class="carousel-item">
            <img src="../assets/img/carousel/b.webp" class="d-block w-100" alt="Image Carousel">
          </div>
          <div class="carousel-item">
            <img src="../assets/img/carousel/c.webp" class="d-block w-100" alt="Image Carousel">
          </div>
          <div class="carousel-item">
            <img src="../assets/img/carousel/d.webp" class="d-block w-100" alt="Image Carousel">
          </div>
          <div class="carousel-item">
            <img src="../assets/img/carousel/e.webp" class="d-block w-100" alt="Image Carousel">
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
      <img src="" alt="réseaux sociaux" class="img-fluid">
    </div>

  </div>
</template>

<style scoped>
/* Ajustement des images */
.carousel-inner img {
  object-fit: cover;
  object-position:center;
  width: 100%;
  height: 100%;
  max-height: 600px;
}

#carousel-main-page {
  max-height: 600px;
}
</style>
