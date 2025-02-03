<script setup>
defineProps({
  names: String,
  role: String,
  description: String,
  image: String
})
</script>

<template>
  <article>
    <div class="face">
        <img :src="image" alt="">
    </div>
    <div class="description-face">
        <h4>{{ names }}</h4>
        <p>{{ role }}</p>
        <p>{{ description }}</p>
    </div>
  </article>
</template>

<style scoped>

</style>