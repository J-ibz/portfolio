<template>
  <main class="main">
    <div id="projects" class="container">
      <h2>Mes projets</h2>
      <p>Vous trouverez ici quelques-uns des projets que j'ai créés pendant ma formation, chaque projet possède sa propre étude de cas.</p>
      <article class="project" v-for="(project, index) in projects" :key="index">
        <div class="project-header">
          <p class="project-type">{{ project.type }}</p>
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-desc">
            {{ project.description }}
          </p>
          <router-link :to="{ name: 'project', params: { id: project.title } }"><span class="link-project">Voir le projet</span></router-link>
        </div>
        <div class="project-img">
          <img loading="lazy" :src="project.image" alt="" />
          <h2>{{ project.title }}</h2>
        </div>
      </article>
    </div>
  </main>
</template>

<script>
export default {
  name: "ProjectsSection",
  components: {},
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
  margin-block: 60px;
  padding-inline: 30px;
  max-width: 1200px;
  font-family: "Inter", sans-serif;
  font-size: 14px;
}

.container h2 {
  font-family: "DM Serif Display", sans-serif;
  max-width: 450px;
  font-size: 28px;
  font-weight: 400;
}

.container > p {
  opacity: 60%;
  margin-block: 15px 30px;
  max-width: 450px;
}

.project {
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: 0.8fr 1fr;
}

.project:last-child {
  margin-bottom: 0;
}

.project-header {
  background-color: black;
  padding: 30px;
  display: flex;
  flex-direction: column;
  min-height: 500px;
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

.project-desc {
  opacity: 65%;
}

.project-header a:last-child {
  margin-top: auto;
}

.project-img {
  position: relative;
  text-align: center;
}

.project-img h2 {
  font-size: 34px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

img {
  width: 100%;
  height: 500px;
  object-fit: cover;
}

.link-project {
  padding: 10px 15px;
  background-color: var(--tertiary);
  border-radius: 5px;
  user-select: none;
  color: #fff;
  cursor: pointer;
  display: inline-block;
}

@media screen and (max-width: 700px) {
  .container {
    padding: 15px;
    margin-block: 60px 0;
  }

  .project {
    grid-template-columns: repeat(1, 1fr);
    grid-template-areas:
      "img"
      "desc";
  }

  .project-desc {
    margin-bottom: 20px;
    grid-area: desc;
  }
  .project-header {
    min-height: auto;
  }
  .project-img {
    grid-area: img;
  }
  img {
    height: 200px;
  }

  .container > h2 {
    font-size: 20px;
  }

  .container p {
    font-size: 13px;
  }

  .project-header {
    padding-inline: 5px;
    padding-block: 15px;
  }
}
</style>
