<template>
  <section class="hero">
    <div class="container">
      <p>{{ project.type }}</p>
      <p>{{ project.title }}</p>
    </div>
  </section>
  <img :src="project.image" :alt="project.alt" />
</template>

<script>
export default {
  name: "HeroProjectSection",
  data() {
    return {
      id: this.$route.params.id,
    };
  },

  created() {
    this.$store.dispatch("setCurrentProject", this.id);
  },
  computed: {
    project: function () {
      return this.$store.getters.getCurrentProject;
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
}

.container p {
  margin: 10px 0;
  max-width: 450px;
  line-height: 1.5;
  padding-inline: 5px;
}

.container p:first-child {
  text-transform: uppercase;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 0.8rem;
  letter-spacing: 4px;
  opacity: 0.7;
}

.container p:nth-child(2) {
  font-family: "DM Serif Display", serif;
  font-size: 2rem;
  letter-spacing: 1.8px;
}

img {
  width: 100%;
  height: 480px;
  object-fit: cover;
}

@media screen and (max-width: 700px) {
  .container {
    padding-inline: 15px;
  }

  img {
    height: 55vw;
  }

  .button {
    width: 160px;
    font-size: 14px;
    margin-top: 40px;
  }
}
</style>
