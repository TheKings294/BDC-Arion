<script setup>
import { ref, onMounted } from "vue";
import time_1 from '@/assets/img/version+ordi+event.webp';
import time_2 from '@/assets/img/version+mobile+event.webp';
import EventDescription from './littel-compnent/event_description.vue';

const times = ref(time_1);

function updateImageBasedOnSize() {
  times.value = window.innerWidth < 1000 ? time_2 : time_1;
}

onMounted(() => {
  updateImageBasedOnSize();
  window.addEventListener('resize', updateImageBasedOnSize);
});
</script>

<template>
  <div class="container py-5">
    <!-- Titre principal -->
    <h1 class="text-center mb-4">Nos Évènements</h1>

    <!-- Image de la timeline -->
    <div class="text-center mb-5">
      <img :src="times" alt="Chronologie des événements" class="img-fluid w-100">
    </div>

    <!-- Description des événements -->
    <div class="row justify-content-center">
      <div class="col-md-8">
        <EventDescription
          title="Des conférences à thèmes"
          content="Des conférences sur le thème du handisport ou à la rencontre des professionnels du milieu équestre dans le but de familiariser et de faire découvrir le monde fermé de l’équitation et du handisport."
          back="#725643"
          color="white"
        />

        <EventDescription
          title="Warm up hivernale"
          content="Une compétition non-officielle à Jouy-le-Potier dans les écuries de Walter Lapertot. Elle se déroulera le 8 mars durant la trêve hivernale des chevaux et de leurs cavaliers. L’objectif est de leur offrir une opportunité de se remettre dans l’ambiance des compétitions avant les grandes échéances."
          back="#F8DF8F"
          color="black"
        />

        <EventDescription
          title="Annonce du teaser"
          content="Une soirée en collaboration avec le Bureau des étudiants Airlines de l’ISC Paris Campus Orléans et le NOVA sur le thème cowboy et western afin de diffuser et d’annoncer le teaser du Orléans Spring Jump."
          back="#725643"
          color="white"
        />

        <EventDescription
          title="Spring jump"
          content="Description de l'événement."
          back="#F8DF8F"
          color="black"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Ajoute ici des styles si nécessaire */
</style>
