<script setup>
defineProps( {
  title: String,
  price: String,
  image: String,
  description: String,
  acroche: String
})

import { ArrowDownToLine } from 'lucide-vue-next';
</script>

<template>
  <article class="d-flex justify-content-center align-items-center flex-wrap">
    <h2 class="partner-title-formule text-center">{{title}}</h2>
    <h3 class="partner-price-formule text-center">{{price}}</h3>
    <p class="acroche text-center">{{acroche}}</p>
    <div class="partner-image-formule">
        <img :src="image" alt="Partener image">
    </div>
    <div class="partner-description-formule">
        <p>{{description}}</p>
    </div>
    <a href="" class="dowload">Télécharger le document <ArrowDownToLine /></a>
  </article>
</template>

<style scoped>
.acroche {
  font-style: italic;
}
article {
  width: 472px;
  height: 707px;
  border-radius: 10px;
  background-color: #E1D2C8;
}
.partner-image-formule img {
  width: 472px;
  height: 183px;
}
.partner-title-formule {
  color: #725643;
  font-size: 48px;
}
.partner-price-formule {
  font-size: 36px;
  color: black;
}
.dowload {
  width: 300px;
  height: 42px;
  background-color: #725643;
  color: white;
  border-radius: 5px;
  margin-top: auto;
}
.partner-description-formule {
  margin-left: 5px;
  margin-right: 5px;
}
</style>