<script setup>
import carte from '@/assets/img/carte.webp'
import arrow from '@/assets/img/fleche.webp'
import ban1 from '@/assets/img/photo-1-orléans-spring-jump.webp'
import ban2 from '@/assets/img/photo-2-orléans-spring-jump.webp'
</script>

<template>
  <h1 class="text-center fs-1">Orléans Spring Jump</h1>
  <div id="spring-jump-decription" class="ms-4 me-4 text-center fs-4">
    <p class="mt-4">Une comptétition de saut d'obstacles amateur et profesionel sur le jours, c'est l'ambition du Bureau des
      Cavalier Arions pour 2025</p>
  </div>
  <div id="france-map" class="d-flex justify-content-center align-items-center mt-5">
    <img :src="carte" alt="carte france" width="300" height="300">
    <img :src="arrow" alt="" width="300" height="100" class="align-self-end ms-3 me-3">
    <p class="fs-4">Avec des cavaliers<br> de la France entière</p>
  </div>
  <div id="baniere-spring-one" class="mt-5 mb-5">
    <img :src="ban1" alt="">
  </div>
  <div id="programme-description">
    <h2 class="text-center">Au programme :</h2>
    <article>
      <p class="text-center ms-4">-Une compétition ofrant l'oppotunité de rivaliser dans un cadre exeptionnel<br>
         -Des spectacles<br>
         -de l'handisport<br>
         -et bien plus encore<br>
      </p>
      <p style="font-style: italic" class="text-center">
        Le Orléans Spring Jump vous offres un lieu de visibilité, vous permettant de prendre contact avec divers auteur
        important de notre prestigieux monde equestre
      </p>
    </article>
  </div>
  <div id="baniere-spring-two" class="mt-">
    <img :src="ban2" alt="">
  </div>
  <div id="long-text">
    <p>
      Vivez une expérience inoubliable en assistant au Orléans Spring Jump.
      Venez profiter de notre espace partenaire. Équipé d’une restauration de qualité, vous pourrez retrouver un buffet
      haut de gamme.
      Découvrez l’endroit parfait pour établir de nouveaux contact et faire de nouvelles rencontres tout en admirant de
      près une compétition de saut d’obstacle de haut niveau sans oublier des spectacles et des animations en tout genre.

    </p>
  </div>
</template>

<style scoped>
#baniere-spring-one {
  width: 100%;
  height: 200px;
  overflow: hidden;
}
#baniere-spring-one img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  object-position: center center;
}
#baniere-spring-two {
  width: 100%;
  height: 200px;
  overflow: hidden;
}
#baniere-spring-two img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  object-position: center center;
}
</style>