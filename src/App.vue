<script setup>
import NavBar from './components/navBar.vue'
</script>

<template>
  <div>
    <nav>
      <router-link to="/">Acceuil</router-link>
      <router-link to="/home">Home</router-link>
    </nav>
  </div>
  <div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
header {
  background-color: #000000;
  display: flex;
  justify-content: flex-start;
}
</style>
