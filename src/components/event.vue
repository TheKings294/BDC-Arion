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
      <event_description :title="'Event 1'" :content="'description de l\'event'" :back="'#725643'" :color="'white'"></event_description>
      <event_description :title="'Event 2'" :content="'description de l\'event'" :back="'#F8DF8F'" :color="'black'"></event_description>
      <event_description :title="'Event 3'" :content="'description de l\'event'" :back="'#725643'" :color="'white'"></event_description>
      <event_description :title="'Event 4'" :content="'description de l\'event'" :back="'#F8DF8F'" :color="'black'"></event_description>
    </div>
  </div>
</template>

<style scoped>

</style>
