<script setup>
import TeamDesscription from './littel-compnent/team_desscription.vue';
import { onMounted } from "vue";

onMounted(() => {
  document.querySelector('body').style.background = '#fff';
});
</script>

<template>
  <div class="container-fluid p-0">
    <!-- Bannière pleine largeur -->
    <div class="position-relative w-100" style="height: 300px; overflow: hidden;">
      <img src="../assets/img/image+bella+marion+cassille+lison.webp" class="w-100 h-100 object-fit-cover" alt="Bannière">
    </div>

    <!-- Présentation -->
    <div class="container py-5 text-center">
      <h1 class="display-3 fw-bold">QUI SOMMES-NOUS ?</h1>
      <p class="mt-3">
        Le Bureau des Cavaliers Arion, dit BDC, est une association orléanaise d’évènementiel équestre.
      </p>
      <p>Nous sommes basés à ...</p>
      <p>
        L’ambition première du BDC est l’organisation d’un Jumping, le Orléans Spring Jump, à envergure nationale, mais pas que !
        Le Bureau des Cavaliers organise également des événements tout au long de l’année.
      </p>
      <p>Et il est aujourd’hui composé de 11 cavalières.</p>
      <img src="../assets/svg/logo-ISC-noir.sig.svg" class="img-fluid my-3" style="width: 150px; height: 150px;" alt="Logo BDC">
    </div>

    <!-- Présidente -->
    <div class="container text-center mb-5">
      <div class="card mx-auto shadow-lg p-4" style="max-width: 400px;">
        <img src="../assets/img/persons/pres Cassille.jpg" class="card-img-top rounded-circle mx-auto d-block" style="width: 150px; height: 150px; object-fit: cover;">
        <div class="card-body">
          <h4 class="card-title">Cassille Legroux-Chazée</h4>
          <p class="card-text text-muted">Présidente</p>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>

    <!-- Équipe (2 par ligne) -->
    <div class="container">
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <TeamDesscription
            names="Lison Engelhard"
            role="Vice-présidente"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            image="../assets/img/persons/pres_lison.jpg"
          />
        </div>
        <div class="col">
          <TeamDesscription
            names="Chloé Chaumette"
            role="Équipe événementiel"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            image="../assets/img/persons/pres chloe.jpg"
          />
        </div>
        <div class="col">
          <TeamDesscription
            names="Maïlys Larroque"
            role="Équipe événementiel"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            image="../assets/img/persons/pres mailys.jpg"
          />
        </div>
        <div class="col">
          <TeamDesscription
            names="Ilona François-Dit-Charlemagne"
            role="Équipe événementiel"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            image="../assets/img/persons/pres ilona.jpg"
          />
        </div>
        <div class="col">
          <TeamDesscription
            names="Elinn Lafitte"
            role="Équipe partenariats"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            image="../assets/img/persons/pres elinn.jpg"
          />
        </div>
        <div class="col">
          <TeamDesscription
            names="Manon Founeau"
            role="Équipe partenariats"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            image="../assets/img/persons/pres manon.jpg"
          />
        </div>
        <div class="col">
          <TeamDesscription
            names="Orlane Jean-Baptist"
            role="Équipe communication"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            image="../assets/img/persons/pres orlane.jpg"
          />
        </div>
        <div class="col">
          <TeamDesscription
            names="Inès Vandentorren"
            role="Équipe communication"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            image="../assets/img/persons/pres ines.jpg"
          />
        </div>
        <div class="col">
          <TeamDesscription
            names="Lola Corre"
            role="Équipe communication"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            image="../assets/img/persons/pres lola.jpg"
          />
        </div>
        <div class="col">
          <TeamDesscription
            names="Clémence Levicki"
            role="Équipe communication"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            image="../assets/img/persons/pres clemence.jpg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.object-fit-cover {
  object-fit: cover;
}
</style>
