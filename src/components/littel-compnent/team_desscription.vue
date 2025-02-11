<script setup>
defineProps({
  names: String,
  role: String,
  description: String,
  image: String
})
</script>

<template>
  <article class=" article border border-5">
    <div class="face">
        <img :src="image"class ="reduc"  alt="">
    </div>
    <div class="description-face">
        <h4>{{ names }}</h4>
        <p>{{ role }}</p>
        <p id="description">{{ description }}</p>
    </div>
  </article>
</template>

<style scoped>
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
  border-radius:90px;

}
.face{
  border-radius: 50%;
  overflow: hidden;
  width: 250px;
  height: 150px;
  margin: 5px
  
  }

#description{
    margin:50px
  }
</style>