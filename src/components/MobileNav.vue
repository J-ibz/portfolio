<template>
  <section>
    <div class="container" v-if="modeMobile">
      <router-link :to="{ name: 'home' }" class="logo"><b>Jérémie Ibanez</b> Portfolio</router-link>
    </div>
    <div class="mobile-nav" v-if="modeMobile">
      <router-link :to="{ name: 'home', hash: '#projects' }"><i class="fa-regular fa-clone"></i> Projets</router-link>
      <router-link :to="{ name: 'about' }"><i class="fa-solid fa-list-ul"></i>À Propos</router-link>
      <router-link :to="{ hash: '#contact' }"><i class="fa-regular fa-message"></i>Say Hi!</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeaderSection",
  data() {
    return {
      modeMobile: null,
      mobileNav: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreenSize); //Permet de vérifier a chaque resize la taille de l'écran
    this.checkScreenSize(); //Permet de vérifier la taille de l'écran au lancement de l'app
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    checkScreenSize() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.modeMobile = true;
        return;
      } else {
        this.modeMobile = false;
        this.mobileNav = false;
      }
      return;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap");

i {
  color: white;
}

.nav {
  background-color: black;
  position: sticky;
  top: 0;
  z-index: 2;
}

.container a:first-child {
  margin-left: 0;
}
.container a {
  margin-left: 30px;
  font-size: 1.1rem;
  position: relative;
}

.container > * {
  color: white;
}

.container {
  margin-inline: auto;
  padding-block: 20px;
  padding-inline: 30px;
  max-width: 1200px;
  display: flex;
  align-items: center;
  user-select: none;
  font-size: 1.2rem;
  font-family: "Inter", sans-serif;
}

.logo {
  margin-right: auto;
}

.logo:hover {
  color: var(--tertiary);
  transition: all 0.2s ease-in-out;
}

.mobile-nav {
  background-color: black;
  position: absolute;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding-block: 12px;
  display: flex;
  justify-content: space-around;
  font-size: 1.2rem;
  font-family: "Inter", sans-serif;
}

.mobile-nav {
  display: flex;
  margin-top: auto;
}

.mobile-nav a {
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media screen and (max-width: 700px) {
  .container {
    padding-inline: 15px;
  }
}
</style>
