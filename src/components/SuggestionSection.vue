<template>
  <section class="suggestions" id="projects">
    <div class="container">
      <h2 v-if="aboutSuggestion">Mes projets</h2>
      <h2 v-if="!aboutSuggestion">Autres projets</h2>
      <div class="wrapper-grid">
        <div class="card" v-for="(project, index) in projects" :key="index">
          <router-link :to="{ name: 'project', params: { id: project.title } }">
            <img loading="lazy" :src="project.image" :alt="project.alt" />
            <footer>
              <p class="project-type">{{ project.type }}</p>
              <h3 class="project-title">{{ project.title }}</h3>
            </footer>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      aboutSuggestion: null,
    };
  },

  methods: {
    checkRoute() {
      if (this.$route.name === "about") {
        this.aboutSuggestion = true;
        return;
      }
      this.aboutSuggestion = false;
    },
  },

  created() {
    this.checkRoute(); //Permet d'initialiser la fonction
  },

  computed: {
    projects() {
      return this.$store.getters.getProjects;
    },
  },
};
</script>

<style scoped>
.container {
  margin-inline: auto;
  margin-block: 0 60px;
  padding-inline: 30px;
  max-width: 1200px;
  font-family: "Inter", sans-serif;
  font-size: 14px;
}

h2 {
  font-family: "DM Serif Display", sans-serif;
  font-weight: 100;
  font-size: 28px;
  margin-bottom: 30px;
}

.wrapper-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-columns: 1fr;
  grid-column-gap: 30px;
  grid-template-rows: auto;
  grid-row-gap: 30px;
}

@media screen and (max-width: 1000px) {
  .wrapper-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 700px) {
  .wrapper-grid {
    grid-template-columns: repeat(1, 1fr);
  }
  .container {
    padding-inline: 15px;
  }
}

.card {
  max-width: 100%;
  height: 100%;
}

img {
  height: 350px;
  width: 100%;
  object-fit: cover;
}

footer {
  /* background-color: var(--primary); */
  padding: 20px;
  margin-top: -3px;
}

.project-type {
  opacity: 65%;
}

.project-title {
  font-family: "DM Serif Display", serif;
  font-weight: 400;
  font-size: 20px;
  margin-block: 14px 10px;
}

#app > section > section.suggestions > div > div > div:nth-child(6) > a > footer,
#projects > div > div > div:nth-child(6) > a > footer {
  background-color: #34a393;
}
#app > section > section.suggestions > div > div > div:nth-child(5) > a > footer,
#projects > div > div > div:nth-child(5) > a > footer {
  background-color: #b9b95b;
}
#app > section > section.suggestions > div > div > div:nth-child(4) > a > footer,
#projects > div > div > div:nth-child(4) > a > footer {
  background-color: #90725d;
}

#app > section > section.suggestions > div > div > div:nth-child(3) > a > footer,
#projects > div > div > div:nth-child(3) > a > footer {
  background-color: #adbbbd;
}
#app > section > section.suggestions > div > div > div:nth-child(2) > a > footer,
#projects > div > div > div:nth-child(2) > a > footer {
  background-color: #e0a876;
}

#app > section > section.suggestions > div > div > div:nth-child(1) > a > footer,
#projects > div > div > div:nth-child(1) > a > footer {
  background-color: #aa4c20;
}
</style>
