<script setup>
defineProps({
  title: String,
  price: String,
  image: String,
  description: String,
  accroche: String
});

import { ArrowDownToLine } from 'lucide-vue-next';
</script>

<template>
  <article class="card p-3 text-center shadow">
    <h2 class="partner-title">{{ title }}</h2>
    <h3 class="partner-price">{{ price }}</h3>
    <p v-if="accroche" class="accroche">{{ accroche }}</p>

    <div v-if="image" class="partner-image">
      <img :src="image" alt="Image du partenaire" class="img-fluid rounded">
    </div>

    <p class="partner-description">{{ description }}</p>

    <a href="#" class="btn btn-primary d-flex align-items-center justify-content-center gap-2">
      Télécharger le document <ArrowDownToLine />
    </a>
  </article>
</template>

<style scoped>
.card {
  max-width: 450px;
  border-radius: 10px;
  background-color: #E1D2C8;
}

.partner-title {
  color: #725643;
  font-size: 1.75rem;
}

.partner-price {
  font-size: 1.5rem;
  color: black;
}

.accroche {
  font-style: italic;
}

.partner-image img {
  width: 100%;
  height: 100px;
  object-fit: cover;
}

.partner-description {
  padding: 0 10px;
}

.btn-primary {
  background-color: #725643;
  border: none;
}
</style>
