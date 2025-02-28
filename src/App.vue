<script>
export default {
  name: "App",
  computed: {
    showNavbar() {
      return this.$route.path !== "/form";
    },
    showFooter() {
      return this.$route.path !== "/form";
    }
  }
};
</script>

<template>
  <div>
    <!-- Navbar -->
    <header>
      <nav class="navbar navbar-expand-lg" v-if="showNavbar">
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
            <ul class="navbar-nav justify-content-evenly align-items-center w-100 fs-5 fst-italic">
              <li class="nav-item">
                <router-link to="/about" class="nav-link">Qui sommes-nous</router-link>
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
                <router-link to="/spring_jump" class="nav-link">Spring Jump</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <!-- Contenu dynamique -->
    <router-view></router-view>

    <!-- Footer -->
    <footer v-if="showFooter">
      <div class="container-fluid">
        <div class="row">
          <!-- Bouton Nous contacter -->
          <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <router-link to="/form" class="btn btn-primary">Nous contacter</router-link>
          </div>

          <!-- Liens réseaux sociaux -->
          <div class="col-md-6 text-center text-md-end">
            <ul class="list-unstyled">
              <li>
                <a href="https://www.instagram.com/bdc_arion" target="_blank" rel="noopener noreferrer" class="text-dark">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@bdcarion" target="_blank" rel="noopener noreferrer" class="text-dark">
                  TikTok
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/bdc-arion-65a0452a6" target="_blank" rel="noopener noreferrer" class="text-dark">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Navbar */
.navbar {
  padding: 10px 20px;
}

/* Footer */
footer {
  border-top: 1px solid #ddd;
  padding: 20px 0;
}

/* Ajustement des liens du footer */
footer ul li {
  display: inline;
  margin-right: 15px;
}

footer ul li a {
  text-decoration: none;
  font-weight: 500;
}
</style>
