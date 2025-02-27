<script setup>
import TeamDesscription from './littel-compnent/team_desscription.vue';
import { onMounted } from "vue";
import lison from '@/assets/img/persons/pres-lison.avif'
import chloe from '@/assets/img/persons/pres-chloe.avif'
import mailys from '@/assets/img/persons/pres-mailys.avif'
import ilona from '@/assets/img/persons/pres-ilona.avif'
import elinn from '@/assets/img/persons/pres-elinn.avif'
import manon from '@/assets/img/persons/pres-manon.avif'
import orlane from '@/assets/img/persons/pres-orlane.avif'
import ines from '@/assets/img/persons/pres-ines.avif'
import lola from '@/assets/img/persons/pres-lola.avif'
import clemence from '@/assets/img/persons/pres-clemence.avif'

onMounted(() => {
  document.documentElement.style.backgroundColor = '#fff';
});

// Données de l'équipe
const teamMembers = [
  { name: "Lison Engelhard", role: "Vice-présidente", image: lison},
  { name: "Chloé Chaumette", role: "Équipe événementiel", image: chloe },
  { name: "Maïlys Larroque", role: "Équipe événementiel", image: mailys },
  { name: "Ilona François-Dit-Charlemagne", role: "Équipe événementiel", image: ilona },
  { name: "Elinn Lafitte", role: "Équipe partenariats", image: elinn },
  { name: "Manon Founeau", role: "Équipe partenariats", image: manon },
  { name: "Orlane Jean-Baptiste", role: "Équipe communication", image: orlane },
  { name: "Inès Vandentorren", role: "Équipe communication", image: ines },
  { name: "Lola Corre", role: "Équipe communication", image: lola },
  { name: "Clémence Levicki", role: "Équipe communication", image: clemence }
];
</script>

<template>
  <div class="container-fluid p-0">
    <!-- Bannière pleine largeur -->
    <div class="position-relative banner">
      <img src="../assets/img/image-bella-marion-cassille-lison.avif"
           class="img-fluid object-fit-cover"
           alt="Bannière">
    </div>

    <!-- Présentation -->
    <div class="container py-5 text-center">
      <h1 class="display-3 fw-bold">QUI SOMMES&ndash;NOUS ?</h1>

      <p class="mt-3">
        Le Bureau des Cavaliers Arion, dit BDC, est une association orléanaise d’événementiel équestre.
      </p>
      <p>Nous sommes basés à ...</p>
      <img src="../assets/svg/logo-ISC-noir.sig.svg"
           class="img-fluid my-0 logo"
           alt="Logo ISC">
      <p>
        L’ambition première du BDC est l’organisation d’un Jumping, l’Orléans Spring Jump, à envergure nationale,
        pas que !
        Le Bureau des Cavaliers organise également des événements tout au long de l’année.
      </p>
      <p>Et il est aujourd’hui composé de 11 cavalières.</p>
    </div>

    <!-- Présidente -->
    <div class="container text-center mb-5">
      <div class="card mx-auto shadow-lg p-4" style="max-width: 400px;">
        <img src="../assets/img/persons/pres-Cassille.avif"
             class="card-img-top rounded-circle profile-img">
        <div class="card-body">
          <h4 class="card-title">Cassille Legroux-Chazée</h4>
          <p class="card-text text-muted">Présidente</p>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>

    <!-- Équipe -->
    <div class="container">
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div v-for="(member, index) in teamMembers" :key="index" class="col">
          <TeamDesscription
            :names="member.name"
            :role="member.role"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            :image="member.image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo {
  width: 150px;
  height: 150px;
}

.profile-img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  display: block;
  margin: 0 auto;
}

.object-fit-cover {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>
