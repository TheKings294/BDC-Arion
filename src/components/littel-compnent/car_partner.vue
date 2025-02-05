<script setup>
defineProps( {
  title: String,
  price: String,
  image: String,
  description: String,
  acroche: String
})
</script>

<template>
  <article>
    <h2 class="partner-title-formule">{{title}}</h2>
    <h3 class="partner-price-formule">{{price}}</h3>
    <div class="partner-image-formule">
        <img :src="image" alt="Partener image">
    </div>
    <div class="partner-description-formule">
        <p class="acroche">{{acroche}}</p>
        <p>{{description}}</p>
    </div>
    <a href="">Télécharger le document</a>
  </article>
</template>

<style scoped>
.acroche {
  font-style: italic;
}
</style>