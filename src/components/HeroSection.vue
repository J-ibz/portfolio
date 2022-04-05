<template>
  <section class="hero">
    <div class="container">
      <p>Hello !</p>
      <p>Je m'appelle<span> Jérémie</span>, je suis développeur Fullstack et je crée des sites web grâce à la télékinésie 😵.</p>
      <router-link :to="{ hash: '#projects' }"><button class="button">Voir mon travail</button></router-link>
    </div>
  </section>
  <img src="../assets/pexels-bruno-thethe-1910225.jpg" alt="" />
</template>

<script>
export default {
  name: "HeroSection",
  props: {},
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
  font-size: 1.2rem;
}

.container p:nth-child(2) span {
  font-size: 1.5rem;
  font-weight: bold;
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
  font-size: 1.4rem;
  width: 230px;
  font-family: "Inter", sans-serif;
  color: #fff;
}

.button:hover {
  cursor: pointer;
}

.button a,
.button::after {
  color: white;
}
.button::after {
  margin-top: 3px;
  font-family: "Material Icons";
  content: "\e8f4";
  font-size: 22px;
  margin-left: auto;
  padding-left: 5px;
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

  .container p:first-child {
    font-size: 0.7rem;
  }
  .container p:nth-child(2) {
    font-size: 1rem;
  }

  .container p:nth-child(2) span {
    font-size: 20px;
  }

  .button {
    width: 160px;
    font-size: 14px;
    margin-top: 40px;
  }

  .button::after {
    margin-top: 0;
  }
}
</style>
