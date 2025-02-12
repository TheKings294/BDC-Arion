<script setup>
import carte from '@/assets/img/carte.webp';
import arrow from '@/assets/img/fleche.webp';
</script>

<template>
  <div class="container my-5">
    <!-- Titre -->
    <h1 class="text-center fw-bold">Orléans Spring Jump</h1>

    <!-- Introduction -->
    <div class="text-center fs-4 mx-auto mt-4 px-3 text-break">
      <p>
        Une compétition de saut d'obstacles amateur et professionnel sur plusieurs jours.
        C'est l'ambition du Bureau des Cavaliers Arions pour 2025.
      </p>
    </div>

    <!-- Section carte + flèche + texte -->
    <div class="row align-items-center justify-content-center text-center mt-5 g-3">
      <div class="col-md-4">
        <img :src="carte" alt="Carte de la France" class="img-fluid" style="max-width: 300px;">
      </div>
      <div class="col-md-2 d-flex justify-content-center">
        <img :src="arrow" alt="Flèche" class="img-fluid arrow-img">
      </div>
      <div class="col-md-4">
        <p class="fs-4">Avec des cavaliers <br> de la France entière</p>
      </div>
    </div>

    <!-- Première bannière -->
    <div class="mt-5">
      <img src="../assets/img/photo-1-orleans-spring-jump.webp" alt="Bannière 1" class="img-fluid w-100">
    </div>

    <!-- Programme -->
    <div class="mt-5">
      <h2 class="text-center fw-bold">Au programme :</h2>
      <article class="text-center mx-auto px-3 text-break">
        <p class="fw-semibold">
          - Une compétition dans un cadre exceptionnel <br>
          - Des spectacles <br>
          - Du handisport <br>
          - Et bien plus encore...
        </p>
        <p class="fst-italic">
          L'Orléans Spring Jump vous offre une opportunité unique de visibilité,
          vous permettant de prendre contact avec divers acteurs du monde équestre.
        </p>
      </article>
    </div>

    <!-- Deuxième bannière -->
    <div class="mt-5">
      <img src="../assets/img/photo-2-orleans-spring-jump.webp" alt="Bannière 2" class="img-fluid w-100">
    </div>

    <!-- Description longue -->
    <div class="mt-5">
      <p class="text-center fs-5 px-3 text-break">
        Vivez une expérience inoubliable en assistant à l'Orléans Spring Jump.
        Profitez de notre espace partenaire équipé d’une restauration haut de gamme et d’un buffet d’exception.
        Découvrez l’endroit parfait pour établir de nouveaux contacts et faire de nouvelles rencontres,
        tout en admirant une compétition de saut d’obstacles de haut niveau.
        Sans oublier des spectacles et des animations en tout genre !
      </p>
    </div>
  </div>
</template>

<style scoped>
/* Ajustement de l'image flèche */
.arrow-img {
  max-width: 150px;
  height: auto;
  object-fit: contain;
}

/* Espacement sur mobile */
@media (max-width: 768px) {
  .fs-4 {
    font-size: 1.2rem;
  }
}
</style>
