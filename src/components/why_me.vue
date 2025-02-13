
<script setup>
import { onMounted } from "vue";
</script>

<template>
  <div id="wy-me-head">
    <h1 class="display-3 fw-bold titre">Pourquoi nous?</h1>
    
  </div>

  <section class="sec"> 
    <div class="select1">
      <div class="rassemblement"> 
        <h2  class="soustitre">Innovation </h2>
        <img src="../assets/img/valeur+innovation.webp" class="diminution">
      </div>
      <p class="paragraphe">Le Bureau des Cavaliers et le Parcours Cavaliers ont su se démarquer en France en étant des précurseurs dans le domaine équestre pour l’éducation.  </p>
    </div>
  </section>
  <section class="sec2">
    <div class="select2">
      <div class="rassemblement">
        <h2 class="soustitre">Inclusion </h2>
        <img src="../assets/img/valeur+inclusion.webp" class="diminution">
      </div>
        
      <p class="paragraphe">L’objectif du Bureau des Cavaliers consiste à promouvoir tous les cavaliers, en mettant l’accent sur la pratique handisport, et ce, en incluant des athlètes paralympiques.  </p>
    </div>
  </section>
   
  <section class="sec">
    <div class="select1">
      <div class="rassemblement">
        <h2 class="soustitre">Respect </h2>
        <img src="../assets/img/valeur+respect.webp" class="diminution">
      </div>
      <p class="paragraphe"> Le respect est une valeur fondamentale pour le Bureau des Cavaliers, qui s’efforce de garantir un traitement approprié à chacun et à chaque cheval.
      </p>
      
    </div>
  </section>
  <div class="bas">
    <p class="paragraphe ">Soutenir le Bureau Des Cavalières, c’est soutenir ses valeurs.</p>
    
  </div>
    
</template>

<style scoped>
#wy-me-head{
  background-color:white;
  display: flex;
  justify-content: center;
  padding-bottom: 10px;

}

.titre{
  text-align: center;
  padding-top: 10px;
  border-bottom: solid black 5px;
  width: 80%;


}

.soustitre{
width: 100%;
font-size: 50px;

}

.select2{
 
  padding: 5px;
  
  width: 30%;
  text-align: center;

}

.select1{
  padding: 5px;
  
  width: 30%;
  text-align: center;


}

.paragraphe{
  width: 100%;
  font-size: 20px;
}

.sec{
  display: flex;
  justify-content: flex-end;
  padding-right: 80px;

}
.sec2{
  display: flex;
  justify-content: flex-start;
  padding-left: 80px;
}

.diminution{
  width: 20%;
  height: 20%;
}

.rassemblement{
  display: flex;
  
}

.bas{
  padding-top: 10px;
  display: flex;
  justify-content: center;
  
  text-align: center;
}
</style>
