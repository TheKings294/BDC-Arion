<script setup>
defineProps({
  title: String,
  content: String,
  back: String,
  color: String
    }
)
</script>

<template>
  <article :style="{backgroundColor: back, color: color}" class="component rounded mb-3">
    <h4 class="fs-4 text-center">{{title}}</h4>
    <p class="text-center">{{content}}</p>
  </article>
</template>

<style scoped>
@media (min-width: 1250px) {
  .component {
    width: 700px;
    height: 200px;
  }
}
</style>