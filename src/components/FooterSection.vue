<template>
  <section class="footer">
    <footer class="container">
      <div class="footer-wrapper">
        <div class="logo"><b>Jérémie Ibanez</b> Portfolio</div>
        <p>
          Un site construit grâce à la télékinésie et les voyages dans le temps 😎.
          <br />
          Ainsi qu'un Developpeur Web orienté front-end.
        </p>
        <div class="footer-list">
          <router-link v-for="(project, index) in projects" :key="index" :to="{ name: 'project', params: { id: project.title } }"
            ><span class="link-project">{{ project.title }} |</span>
          </router-link>
        </div>
        <div class="social-wrapper">
          <a href="https://github.com/J-ibz" target="_blank"><i class="fa-brands fa-github"></i></a>
          <a href="https://www.linkedin.com/in/jeremie-ibanez-webdev/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
        </div>
      </div>
    </footer>
  </section>
</template>

<script>
export default {
  name: "FooterSection",

  computed: {
    projects() {
      return this.$store.getters.getProjects;
    },
  },
};
</script>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  margin-top: auto;
}

section {
  padding: 30px;
  background-color: black;
  font-size: 14px;
  color: #fff;
}
.container {
  margin-inline: auto;
  margin-block: 30px;
  max-width: 1200px;
  font-family: "Inter", sans-serif;
  text-align: center;
}

.logo,
.footer-wrapper > p,
.footer-list {
  margin-bottom: 30px;
}

.logo {
  font-size: 19.2px;
}

a {
  padding: 5px;
}

i {
  font-size: 25px;
}
</style>
