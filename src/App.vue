<script>
export default {
  name: 'App',
  computed: {
    showNavbar() {
      // Masquer la navbar uniquement pour la route '/formulaire'
      return this.$route.path !== '/form';
    },
    showFooter() {
      // Masquer le footer uniquement pour la route '/formulaire'
      return this.$route.path !== '/form';
    }
  }
}
</script>

<template>
  <div>
        <nav class="navbar bg-body-tertiary navbar-expand-lg" v-if="showNavbar">
          <div class="container-fluid">
            <router-link to="/" class="navbar-brand">
              <img src="./assets/svg/Logo%20Arion.svg" alt="Bootstrap" width="30" height="24">
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
  <footer v-if="showFooter">
    <router-link to="/form">Formulaire</router-link>
  </footer>
</template>

<style scoped>

</style>
