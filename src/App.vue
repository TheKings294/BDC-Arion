<script setup>
</script>

<template>
  <div>
    <nav class="navbar bg-body-tertiary navbar-expand-lg">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">
          <img src="" alt="Bootstrap" width="30" height="24">
        </router-link>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/about" class="navbar-link">Qui sommes nous</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/why_me" class="navbar-link">Pourquoi nous</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/partner" class="navbar-link">Partenaria</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/events" class="navbar-link">Évènements</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <div>
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>
