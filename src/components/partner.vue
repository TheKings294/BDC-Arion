<script setup>
import car_partner from './littel-compnent/car_partner.vue'
import formlue1 from '@/assets/img/formule+classique.webp'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import "swiper/css/effect-coverflow";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
</script>

<template>
  <h1>Page Partenaria</h1>
  <swiper
      effect="coverflow"
      :modules="[EffectCoverflow, Pagination, Navigation]"
      :centeredSlides="true"
      :slidesPerView="3"
      :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      }"
      :pagination="{ clickable: true }"
      :navigation="true"
  >
    <swiper-slide><car_partner :title="'Test'" :price="'10 000€'" :description="'test'" :image="formlue1"></car_partner></swiper-slide>
    <swiper-slide><car_partner :title="'Test2'" :price="'10 000€'" :description="'test2'"></car_partner></swiper-slide>
    <swiper-slide><car_partner :title="'Test3'" :price="'10 000€'" :description="'test3'"></car_partner></swiper-slide>
  </swiper>
</template>

<style scoped>

</style>