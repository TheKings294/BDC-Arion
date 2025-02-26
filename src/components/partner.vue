<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import CarPartner from "./littel-compnent/car_partner.vue";

// Importation des images optimisées
import formule1 from "@/assets/img/formule-premium.avif";
import formule3 from "@/assets/img/formule-excellence.avif";
import formule4 from "@/assets/img/formule-renommee.avif";
import formule5 from "@/assets/img/formule-prestige.avif"; // IMAGE LCP
import formule6 from "@/assets/img/formule-rayonnement.avif";
import formule7 from "@/assets/img/formule-royale.avif";
import formule8 from "@/assets/img/formule-classique.avif";

// Image la plus grande utilisée pour le LCP
const lcpImage = formule5;

// Données des formules de partenariat
const partners = ref([
  {
    title: "Formule Premium",
    price: "400 €",
    description: `
      • Parrainage d’une épreuve préparatoire
      • Panneau au bord de la piste d’échauffement
      • Annonces micro 2 fois par jour
      • Accès à l’espace partenaire
    `,
    image: formule1,
    accroche: "Faites un pas dans le monde équestre !",
  },
  {
    title: "Formule Excellence",
    price: "750 €",
    description: `
      • Parrainage d’une épreuve amateur 2
      • Logo en grande taille sur les toiles de fond
      • Annonces au micro
      • Accès à l’espace partenaire
    `,
    image: formule3,
    accroche: "Vivez la passion équestre à son apogée !",
  },
  {
    title: "Formule Renommée",
    price: "1 000 €",
    description: `
      • Parrainage d’une épreuve amateur 2
      • Logo sur toiles de fond et supports de communication
      • Annonces au micro
      • Accès à l’espace partenaire
    `,
    image: formule4,
    accroche: "Devenez un acteur clé du Jumping !",
  },
  {
    title: "Formule Prestige",
    price: "2 500 €",
    description: `
      • Parrainage d’une épreuve Pro 3
      • Panneau au bord de la piste principale
      • Annonces au micro et balade à poney
      • Accès à l’espace partenaire
    `,
    image: formule5,
    accroche: "Envie d’une expérience exclusive ?",
  },
  {
    title: "Formule Rayonnement",
    price: "6 000 €",
    description: `
      • Parrainage d’une épreuve Pro 2
      • Panneau au bord de la piste principale
      • Un obstacle aux couleurs de votre entreprise
      • Accès à l’espace partenaire
    `,
    image: formule6,
    accroche: "Boostez votre visibilité !",
  },
  {
    title: "Formule Royale",
    price: "9 000 €",
    description: `
      • Parrainage d’une épreuve Pro 2
      • Logo sur les supports de communication
      • Obstacle personnalisé et spectacle inclus
      • Accès à l’espace partenaire
    `,
    image: formule7,
    accroche: "Le summum du Jumping !",
  },
  {
    title: "Formule Classique",
    price: "SUR DEVIS",
    description: `
      • Accès à l’espace partenaire
      • Nom dans la liste des partenaires
      • Prestations personnalisées sur demande
    `,
    image: formule8,
    accroche: "Une offre flexible pour votre communication !",
  },
]);
</script>

<template>
  <div class="container text-center mt-5">
    <h1 class="mb-4">Nos Partenaires</h1>

    <!-- Image LCP préchargée et cachée -->
    <img
      :src="lcpImage"
      width="1200"
      height="800"
      fetchpriority="high"
      loading="eager"
      style="position: absolute; width: 1px; height: 1px; opacity: 0;"
      alt="Image LCP"
    />

    <swiper
      effect="coverflow"
      :modules="[EffectCoverflow, Pagination, Navigation]"
      :centeredSlides="true"
      :slidesPerView="1"
      :breakpoints="{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }"
      :coverflowEffect="{
        rotate: 20,
        stretch: 0,
        depth: 60,
        modifier: 1,
        slideShadows: false,
      }"
      :pagination="{ clickable: true }"
      :navigation="true"
    >
      <swiper-slide v-for="(partner, index) in partners" :key="index">
        <CarPartner
          :title="partner.title"
          :price="partner.price"
          :description="partner.description"
          :image="partner.image"
          :accroche="partner.accroche"
          :loading="partner.image === lcpImage ? 'eager' : 'lazy'"
          width="400"
          height="300"
          :alt="partner.title"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: auto;
}

h1 {
  font-size: 2rem;
  font-weight: bold;
}
</style>
