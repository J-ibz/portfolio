<template>
  <section>
    <div class="container">
      <div class="grid-layout">
        <div class="info">
          <div class="details">
            <h3>Type de projet</h3>
            <p>{{ project.type }}</p>
          </div>
          <div class="details">
            <h3>Technologies</h3>
            <ul>
              <li v-for="(tool, index) in project.tools" :key="index">
                <span>{{ tool }}</span>
              </li>
            </ul>
          </div>
          <div class="details">
            <h3>année</h3>
            <p>{{ project.year }}</p>
          </div>
          <div class="details">
            <h3>code source</h3>
            <p>
              <a :href="project.codeSource" target="_blank"><Icon name="SOURCE-CODE" /><span></span></a>
            </p>
          </div>
        </div>

        <div class="description">
          <h2>{{ project.objectif }}</h2>
          <p>{{ project.difficulties }}</p>
          <h2>Fonctionnalités principales</h2>
          <div class="feature">
            <p v-for="(feature, index) in project.features" :key="index">
              {{ feature }}
            </p>
          </div>
          <a :href="project.link" target="_blank"><button class="button">Visiter le site →</button></a>
        </div>
      </div>
      <div class="grid-layout-screen">
        <div v-for="(screen, index) in project.screen" :key="index"><img :src="screen" alt="" /></div>
      </div>
    </div>
  </section>
</template>

<script>
import Icon from "@/components/Icons.vue";

export default {
  name: "DescriptionProjectSection",
  components: {
    Icon,
  },
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
section {
  padding-block: 60px;
}

.container {
  margin-inline: auto;
  margin-block: 60px;
  padding-inline: 30px;
  max-width: 1200px;
  font-family: "Inter", sans-serif;
  font-size: 14px;
}

.grid-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-column-gap: 30px;
}

@media screen and (max-width: 700px) {
  .container {
    padding-inline: 15px;
  }
  .grid-layout {
    grid-template-columns: repeat(1, 1fr);
  }
  section {
    padding-block: 0;
  }
  ul {
    width: auto;
  }
}

.details {
  margin-bottom: 30px;
}

h2 {
  margin-top: 0px;
  margin-bottom: 30px;
  font-size: 24px;
  line-height: 1.1;
  letter-spacing: 1px;
}

h3 {
  font-size: 14px;
  margin-bottom: 10px;
  font-weight: 600;
  letter-spacing: 1.2px;
  text-transform: uppercase;
}
p {
  opacity: 65%;
}

.description p {
  margin-bottom: 30px;
}

ul {
  width: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

li {
  list-style: none;
  opacity: 65%;
  line-height: 1.5;
  margin-right: 5px;
}

li:not(:last-child)::after {
  content: ",";
}

li:last-child ::after {
  content: ".";
}

.feature {
  display: flex;
  flex-wrap: wrap;
}

@media screen and (max-width: 500px) {
  .feature {
    display: block;
  }
  .feature p:not(:first-child) {
    margin-left: 0 !important;
  }
}

.feature p:not(:first-child) {
  margin-left: 5px;
}

.feature p:not(:last-child)::after {
  content: ",";
}

.feature p::after {
  content: ".";
}

.button {
  display: flex;
  align-items: center;
  margin-top: 60px;
  background-color: var(--tertiary);
  border-radius: 5px;
  border: none;
  padding: 10px;
  user-select: none;
  font-size: 14px;
  font-family: "Inter", sans-serif;
  color: #fff;
  cursor: pointer;
}

.grid-layout-screen {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  padding-block: 60px 0;
}

@media screen and (max-width: 700px) {
  .grid-layout-screen {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 5px;
  }
  h2 {
    font-size: 20px;
  }

  p {
    font-size: 13px;
  }
  h3 {
    font-size: 13px;
  }
}

.grid-layout-screen img {
  width: 100%;
  height: 285px;
  object-fit: cover;
}
</style>
