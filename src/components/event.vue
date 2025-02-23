<script setup>
import {onMounted} from "vue";
import time from '@/assets/img/version+ordi+event.webp'
import event_description from './littel-compnent/event_description.vue'
onMounted(() => {
  document.querySelector('body').style.background = '#fff'
})
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <h1 class="text-center mt-3">Nos Évènements</h1>
      <div id="time-line-event" class="text-center">
        <img :src="time" alt="eventTime" class="w-80">
      </div>
    </div>
    <div id="description-event" class="row d-flex flex-wrap align-items-center mt-5 flex-column">
      <event_description :title="'Des conférences à thèmes'" :content="'Des conférences sur le thème du handisport ou à la rencontre des professionnels du milieu équestre dans le but de familiariser et de faire découvrir le monde fermé de l’équitation et du handisport.'" :back="'#725643'" :color="'white'"></event_description>
      <event_description :title="'Warm up hivernale'" :content="'Une compétition non-officielle à Jouy-le-Potier dans les écuries de Walter Lapertot. Elle se déroulera le 8 mars durant la trêve hivernale des chevaux et de leurs cavaliers. L’objectif et de leur offrir une opportunité de se remettre dans l’ambiance des compétitions avant les grandes échéances. '" :back="'#F8DF8F'" :color="'black'"></event_description>
      <event_description :title="'Annonce du teaser'" :content="'Une soirée en collaboration avec le Bureau des étudiants Airlines de l’ISC Paris Campus Orléans et le NOVA sur le thème cowboy et western afin de diffuser et d’annoncer le teaser du Orléans Spring Jump. '" :back="'#725643'" :color="'white'"></event_description>
      <event_description :title="'Spring jump'" :content="'description de l\'event'" :back="'#F8DF8F'" :color="'black'"></event_description>
    </div>
  </div>
</template>

<style scoped>

</style>
