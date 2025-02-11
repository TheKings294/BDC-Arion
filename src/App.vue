<script>
export default {
  name: 'App',
  computed: {
    showNavbar() {
      return this.$route.path !== '/form';
    },
    showFooter() {
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
              <img src="./assets/svg/Logo-Arion.sig.svg" alt="Logo" width="30" height="24">
            </router-link>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav d-flex justify-content-evenly align-items-center w-100 text-decoration-none text-dark">

                <li class="nav-item">
                  <router-link to="/about" class="navbar-link">Qui sommes nous</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/why_me" class="navbar-link">Pourquoi nous</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/partner" class="navbar-link">Partenariat</router-link>
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
