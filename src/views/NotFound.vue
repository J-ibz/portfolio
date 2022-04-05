<template>
  <section>
    <div class="container">
      <h1>404 NOT FOUND !</h1>
      <p>Oups ! Cette page est introuvable.</p>
      <router-link :to="{ name: 'home' }"> <button>Retour à l'accueil</button> </router-link>
    </div>
  </section>
</template>

<script>
export default {
  methods: {},
};
</script>

<style scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}

.container {
  padding: 100px;
  text-align: center;
}

h1 {
  font-size: 38px;
  font-weight: 100;
  font-family: "DM Serif Display", sans-serif;
  margin-bottom: 30px;
}
p {
  opacity: 65%;
  font-family: "Inter", sans-serif;
  margin-bottom: 15px;
}
button {
  font-family: "Inter", sans-serif;
  margin-left: auto;
  padding: 10px 15px;
  background-color: var(--tertiary);
  border-radius: 5px;
  border: none;
  user-select: none;
  color: #fff;
  margin-block: 13.33px 0;
  cursor: pointer;
  font-size: 16px;
}
</style>
