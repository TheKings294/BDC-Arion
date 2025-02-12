<script setup>
defineProps({
  title: String,
  content: String,
  back: String
    }
)
</script>

<template>
  <article :style="{backgroundColor: back}">
    <h4 class="fs-4">{{title}}</h4>
    <p>{{content}}</p>
  </article>
</template>

<style scoped>

</style>