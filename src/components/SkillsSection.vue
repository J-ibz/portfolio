<template>
  <section>
    <div class="container">
      <h2>Mes compétences</h2>
      <ul class="skills">
        <li class="skills__list css"><Icon name="CSS" /><span>CSS3</span></li>
        <li class="skills__list html"><Icon name="HTML" /><span>HTML5</span></li>
        <li class="skills__list javascript"><Icon name="JAVASCRIPT" /><span>Javascript</span></li>
        <li class="skills__list vue"><Icon name="VUEJS" /><span>Vue</span></li>
        <li class="skills__list"><Icon name="GITHUB" /><span>Github</span></li>
        <li class="skills__list node"><Icon name="NODEJS" /><span>Node JS</span></li>
        <li class="skills__list mysql"><Icon name="MYSQL" /><span>MySQL</span></li>
        <!-- <li class="skills__list firebase"><Icon name="FIREBASE" /><span>Firebase</span></li> -->
        <li class="skills__list responsive"><Icon name="RESPONSIVE" /><span>Responsive</span></li>
        <li class="skills__list"><Icon name="W3C" /><span>W3C</span></li>
      </ul>
    </div>
  </section>
</template>

<script>
import Icon from "../components/Icons.vue";

export default {
  name: "SKillsSection",
  components: { Icon },
};
</script>

<style scoped>
section {
  /* background-color: var(--primary); */
  padding-block: 100px;
}

.container {
  margin-inline: auto;
  padding-inline: 30px;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container h2 {
  margin-bottom: 30px;
  font-family: "Inter", sans-serif;
  font-weight: 100;
  text-transform: uppercase;
  opacity: 70%;
  letter-spacing: 4px;
}

ul {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
}

li {
  margin: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

li span {
  margin-top: 10px;
  font-family: "Inter", sans-serif;
  opacity: 70%;
}
</style>
