<script setup>
import CarPartner from './littel-compnent/car_partner.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import formule1 from '@/assets/img/formule+classique.webp';
</script>

<template>
  <div class="container text-center mt-5">
    <h1 class="mb-4">Nos Partenaires</h1>

    <swiper
      effect="coverflow"
      :modules="[EffectCoverflow, Pagination, Navigation]"
      :centeredSlides="true"
      :slidesPerView="1"
      :breakpoints="{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }"
      :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      }"
      :pagination="{ clickable: true }"
      :navigation="true"
      class="pb-4"
    >
      <swiper-slide v-for="(partner, index) in partners" :key="index">
        <CarPartner
          :title="partner.title"
          :price="partner.price"
          :description="partner.description"
          :image="partner.image"
          :accroche="partner.accroche"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
const partners = [
  {
    title: "Test",
    price: "10 000€",
    description: "Description du premier partenaire.",
    image: formule1,
    accroche: "Une accroche attrayante"
  },
  {
    title: "Test2",
    price: "12 000€",
    description: "Description du deuxième partenaire."
  },
  {
    title: "Test3",
    price: "15 000€",
    description: "Description du troisième partenaire."
  }
];

export default {
  data() {
    return { partners };
  }
};
</script>

<style scoped>
/* Supprimé .swiper-container inutile, remplacé par .pb-4 sur Swiper */
</style>
