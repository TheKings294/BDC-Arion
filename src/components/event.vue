<script setup>
import {onMounted} from "vue";
import time from '@/assets/img/version+ordi+event.webp'
import event_description from './littel-compnent/event_description.vue'
onMounted(() => {
  document.querySelector('body').style.background = '#fff'
})
</script>

<template>
<<<<<<< Updated upstream

  <h1>Page Event</h1>
  <div id="time-line-event">

  </div>
  <div id="description-event">

  </div>
=======
  <h1 class="text-center mt-3">Nos Évènements</h1>
  <div id="time-line-event" class="text-center">
    <img :src="time" alt="eventTime" class="w-80">
  </div>
  <div id="description-event" class="d-flex flex-wrap">
    
  </div>    
>>>>>>> Stashed changes
</template>

<style scoped>

</style>
