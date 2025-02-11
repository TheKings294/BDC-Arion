<script setup>
import team_description from './littel-compnent/team_desscription.vue'

import { onMounted } from "vue";

import chloe from '@/assets/img/persons/pres chloe.jpg'
import clemence from '@/assets/img/persons/pres clemence.jpg'
import elinn from '@/assets/img/persons/pres elinn.jpg'
import ilona from '@/assets/img/persons/pres ilona.jpg'
import ines from '@/assets/img/persons/pres ines.jpg'
import lison from '@/assets/img/persons/pres lison.jpg'
import lola from '@/assets/img/persons/pres lola.jpg'

import manon from '@/assets/img/persons/pres manon.jpg'
import orlane from '@/assets/img/persons/pres orlane.jpg'
import mailys from '@/assets/img/persons/pres mailys.jpg'


onMounted(() => {
document.querySelector('body').style.background = '#fff'
})
const Cassille = "../assets/img/persons/pres Cassille.jpg"
</script>

<template>
<img  id="baniere-spring-one" src="../assets/img/image+bella+marion+cassille+lison.webp" alt=""> 

  <h1 id="titreSommesNous">QUI SOMMES NOUS? </h1>
  <div id="baniere-about-one">  </div>
  <div class="textcolle">
    <p class="textecentre"> Le Bureau des Cavaliers Arion, dit BDC, est une association orléanaise d’évènementiel équestre. </p>
    <p  class="textecentre"> Nous sommes basé à </p>
    <p  class="textecentre"> L’ambition première du BDC est l’organisation d’un Jumping, le Orléans Spring Jump, à envergure national, mais pas que !
      Le Bureau des Cavaliers organise également des événements tout au long de l’année.</p>
      
    <p  class="textecentre"> Et il est aujourd’hui composé de 11 cavalières </p>
    <img src="../assets/svg/logo-ISC-noir.sig.svg" id="logoprese" alt="">
  </div>
  <!-- <div id="about-bdc-description"> 
    <team_description :names="'Antoine'" :description="'Je suis jeune'" :role="'Developpeur Senior'" :image="Cassille" ></team_description>
    <team_description :names="'Kilian'" :description="'Je suis jeune'" :role="'Developpeur Junior'" :image="Cassille" ></team_description>
  </div> 
  <div id="baniere-about-two">
    <img src="" alt=""> 
  </div>
  <div id="team-description">

  </div> -->

  <div class="centre">
    <article class="article">
      <div class="face">
      <img src="../assets/img/persons/pres Cassille.jpg" class="reduc">
    </div>
      <div class="description-face">
          <h4>Cassille Legroux-Chazée</h4>
          <p>Présidente</p>
          <p id="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
      </div>
    </article>
  </div>

  <div class="bdc-description">
    <team_description :names="'Lison Engelhard'" :description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim'" :role="'Vice-présidente'" :image="lison" ></team_description>
    <team_description :names="'Chloé Chaumette'" :description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim'" :role="'Equipe événementiel'" :image="chloe" ></team_description>
  </div>


  <div class="bdc-description">
    <team_description :names="'Maïlys Larroque'" :description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim'" :role="'Equipe événementiel'" :image="maelys" ></team_description>
    <team_description :names="'Ilona François-Dit-Charlemagne'" :description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim'" :role="'Equipe événementiel'" :image="ilona" ></team_description>
  </div>

  <div class="bdc-description">
    <team_description :names="'Elinn Lafitte'" :description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim'" :role="'Equipe partenaria'" :image="elinn" ></team_description>
    <team_description :names="'Manon Founeau'" :description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim'" :role="'Equipe partenaria'" :image="manon" ></team_description>
  </div>

  <div class="bdc-description">
    <team_description :names="'Orlane Jean-Baptist'" :description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim'" :role="'Equipe communication'" :image="orlane" ></team_description>
    <team_description :names="'Inès Vandentorren'" :description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim'" :role="'Equipe communication'" :image="ines" ></team_description>
  </div>

  <div class="bdc-description">
    <team_description :names="'Lola Corre'" :description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim'" :role="'Equipe communication'" :image="lola" ></team_description>
    <team_description :names="'Clémence Levicki'" :description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim'" :role="'Equipe communication'" :image="clemence" ></team_description>
  </div>




  


</template>






<style scoped>
body{
  background-color: white;
}
#titreSommesNous{
  text-align: center;
  padding-top: 2%;
  font-size: 600%
}
.textecentre{
  text-align: center;
}
.textcolle{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 2%;
}

.bdc-description{
  display: flex;
  justify-content: space-around;
  text-align: center;
padding: 4%;
}

#presidente{
  text-align: center;
  padding-top: 7%;
}
.reduc{
  width :2px;
  height: 2px;
}

#baniere-spring-one {
  width: 100%;
  height: 200px;
  overflow: hidden;
}
#baniere-spring-one  img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  object-position: center center;
}

#logoprese{
  width: 150px;
  height: 150px;
}
.centre{
  display: flex;
  justify-content: center;
}


.reduc{
  width: 100%;
  height: 100%;
  object-fit: cover;

  
}
.article{
  box-shadow: 10px 5px 5px black ;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  margin: 5px;
  text-align: center;
  padding-top:70px;
  border-radius:90px;
  width:80%
  

  

}
.face{
  border-radius: 50%;
  overflow: hidden;
  width: 150px;
  height: 150px;
  margin: 5px
  
  }

#description{
    margin:50px
  }

</style>