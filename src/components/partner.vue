<script setup>
import CarPartner from './littel-compnent/car_partner.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import formule1 from '@/assets/img/formule+premium.webp';
import formule2 from '@/assets/img/formule+premium.webp';
import formule3 from '@/assets/img/formule+excellence.webp';
import formule4 from '@/assets/img/formule+renommee.webp';
import formule5 from '@/assets/img/formule+prestige.webp';
import formule6 from '@/assets/img/formule+rayonnement.webp';
import formule7 from '@/assets/img/formule+royale.webp';
import formule8 from '@/assets/img/formule+classique.webp';
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
    title: "Formule premium",
    price: "400 €",
    description: "Cette offre vous propose : • Le parrainage d’une épreuve préparatoire • Un panneau au bord de la pise d’échauffement (exemple ci-dessus) • La présence de votre nom dans la liste de nos partenaires • Des annonces micro 2 fois par jour mettant en avant votre entreprise • Un accès à notre espace partenaire",
    image: formule1,
    accroche: " Faites un pas dans le monde équestre grâce à notre formule premium !"
  },
  {
    title: "Formule élite",
    price: "550 €",
    description:"Cette offre vous propose : • Le parrainage d’une épreuve amateur 3 • La présence de votre nom dans la liste de nos partenaires • Des annonces au micro mettant en avant votre entreprise • Un panneau au bord de la piste d’échauffement •Un accès à notre espace partenaire ",
    image: formule2,
    accroche: "Prêt à atteindre de nouveaux sommets dans le monde passionnant du Jumping ?"
  },
  {
    title: "Formule excellence",
    price: "750 €",
    description: "Cette offre vous propose : • Le parrainage d’une épreuve amateur 2 • La présence de votre logo en grande taille sur nos toiles de fond • Des annonces au micro mettant en avant votre entreprise • Un accès à notre espace partenaire",
    image: formule3,
    accroche:"Vivez la passion équestre à son apogée avec la formule excellence !"
  },
  {
    title: "Formule renommée",
    price: "1 000 €",
    description: "Cette offre vous propose : • Le parrainage d’une épreuve amateur 2 • La présence de votre logo en grande taille sur nos toiles de fond • Un panneau au bord de la piste d’échauffement • Votre présence sur nos supports de communication • Des annonces au micro mettant en avant votre entreprise • Un accès à notre espace partenaire",
    image: formule4,
    accroche:"Vous souhaitez devenir un acteur clé du Jumping ? Plus aucun doutes prenez la formule renommée !"
  },
  {
    title: "Formule prestige",
    price: "2 500 €",
    description: "Cette offre vous propose : • Le parrainage d’une épreuve Pro 3 • Un panneau au bord de la piste principale (exemple ci-dessus) • Votre présence sur nos supports de communication • Des annonces au micro mettant en avant votre entreprise • Balade à poney pour 2 personnes • Un accès à notre espace partenaire • La présence de votre logo en grande taille sur nos toiles de fond",
    image: formule5,
    accroche:"Envie d’une expérience exclusive ? Optez pour notre formule prestige et vivez le Jumping comme jamais auparavant !"
  },
  {
    title: "Formule rayonnement",
    price: "6 000 €",
    description: "Cette offre vous propose : • Le parrainage d’une épreuve Pro 2 • Des annonces au micro mettant en avant votre entreprise • Un panneau au bord de la piste principale • Votre présence sur nos supports de communication • Balade à poney pour 2 personnes • Un accès à notre espace partenaire • Un obstacle aux couleurs de votre entreprise • La présence de votre logo en grande taille sur nos toiles de fond ",
    image: formule6,
    accroche:"Avez-vous l’intention de promouvoir efficacement votre entreprise durant le Jumping ? Alors n’hésitez plus, prenez la formule rayonnement !"
  },
  {
    title: "Formule Royale",
    price: "9 000 €",
    description: "Cette offre vous propose : • Le parrainage d’une épreuve Pro 2 • La présence de votre logo en grande taille sur nos toiles de fond • Un panneau au bord de la piste principale • Votre présence sur nos supports de communication • Des annonces au micro mettant en avant votre entreprise • Balade à poney pour 2 personnes • Un accès à notre espace partenaire • Un obstacle aux couleurs de votre entreprise • Des places pour le spectacle pour 2 personnes",
    image: formule7,
    accroche:"Notre formule Royale est votre passeport pour vivre le Jumping sur la plus haute marche !"
  },
  {
    title: "Formule Classique",
    price: "SUR DEVIS",
    description: "Cette offre vous propose : • Un accès à l’espace partenaire • La présence de votre nom dans la liste de nos partenaires • Possibilité d’y ajouter les prestations de votre choix en vous référant au catalogue",
    image: formule8,
    accroche:"Vous ne souhaitez pas parrainer un épreuve mais juste avoir quelques éléments de communication ? Cette formule est faites pour vous !"
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
