<script setup>
import team_description from './littel-compnent/team_desscription.vue'
</script>

<template>
  <h1>Page About</h1>
  <div id="baniere-about-one">
    <img src="" alt="">
  </div>
  <div id="about-bdc-description">
    <team_description :names="'Antoine'" :description="'Je suis jeune'" :role="'Developpeur Senior'" ></team_description>
    <team_description :names="'Kilian'" :description="'Je suis jeune'" :role="'Developpeur Junior'" ></team_description>
  </div>
  <div id="baniere-about-two">
    <img src="" alt="">
  </div>
  <div id="team-description">

  </div>
</template>

<style scoped>

</style>