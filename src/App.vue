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
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg bg-body-tertiary" v-if="showNavbar">
      <div class="container-fluid">
        <!-- Logo -->
        <router-link to="/" class="navbar-brand d-flex align-items-center">
          <img src="./assets/svg/logo-arion.avif" alt="Logo" class="img-fluid" style="max-width: 60px; height: auto;">
        </router-link>

        <!-- Bouton burger -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Menu -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav justify-content-evenly align-items-center w-100 fs-5 fst-italic ">
            <li class="nav-item">
              <router-link to="/about" class="nav-link">Qui sommes nous</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/why_me" class="nav-link">Pourquoi nous</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/partner" class="nav-link">Partenariat</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/events" class="nav-link">Évènements</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Spring_jump" class="nav-link">Spring-jump</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>

  <!-- Contenu dynamique -->

    <router-view></router-view>

  <!-- Footer -->
 <footer v-if="showFooter" class="bg-light">
  <div class="container-fluid">
    <div class="row">
      <!-- Bouton Nous contacter -->
      <div class="col-md-6 text-center  text-md-start mb-3 mb-md-0">
        <router-link to="/form" class="btn bg-brun">Nous contacter</router-link>
      </div>

      <!-- Liens ou autres informations -->
      <div class="col-md-6 text-center text-md-end">
        <ul class="list-unstyled">
          <li><a href="https://www.instagram.com/bdc_arion?igsh=cTZwZnQxdWwyZXJh" class="text-dark">  </a></li>
          <li><a href="https://www.tiktok.com/@bdcarion?_t=ZN-8uAB9RJaPLi&_r=1" class="text-dark"> </a>  </li>
          <li><a href="https://www.linkedin.com/in/bdc-arion-65a0452a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" class="text-dark"> </a> a </li>
          <li><a href="#" class="text-dark"> </a>  </li>
        </ul>
      </div>
    </div>
  </div>
</footer>

</template>

<style scoped>
/* Ajustements supplémentaires */
.navbar {
  padding: 10px 20px;
}

/* Footer */
footer {
  border-top: 1px solid #ddd;
}
</style>
