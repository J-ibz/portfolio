<template>
  <section class="section">
    <div class="container">
      <div class="card">
        <div class="card-photo"></div>
        <img src="../assets/20220404_182127.jpg" alt="" />
        <div class="card-desc">
          <header>
            <h3>Jérémie</h3>
            <p>Développeur fullstack</p>
          </header>
          <main>
            <p>
              Je suis un développeur tout frais qui vient de finir sa reconversion professionnelle.
              <br />
              <br />
              J'ai envie de m'améliorer pour devenir un meilleur Dev et maitriser l'art du code.
              <br />
              <br />Donc aujourd'hui, je suis en quête de missions et de projets à réaliser.
              <br />
              <br />
              Pour en savoir plus sur ce que j'ai fait, je vous invite à regarder dans la section
              <router-link :to="{ hash: '#projects' }"><b>Projets</b></router-link>
              mon travail.
              <br />
              <br />
              Je suis ouvert à toutes opportunitées professionnelles où je peux contribuer, apprendre et m'épanouir. Si vous avez une offre qui
              correspond à mes compétences et expériences et bien n'hésitez pas à me
              <router-link :to="{ hash: '#contact' }"><b>contacter</b></router-link
              >😀.
            </p>
          </main>
          <footer>
            <a href="https://github.com/J-ibz" target="_blank"><i class="fa-brands fa-github" title="Github"></i></a>
            <a href="https://www.linkedin.com/in/jeremie-ibanez-webdev/" target="_blank" title="Linkedin"><i class="fa-brands fa-linkedin"></i></a>
            <a href="../assets/2022_CV_jeremie_ibanez.pdf" target="_blank" title="Télécharger mon CV" download
              ><i class="fa-solid fa-download"></i
            ></a>
          </footer>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutComp",
};
</script>

<style scoped>
.section {
  padding-block: 0;
  display: flex;
  height: 726.27px;
  max-height: 726.27px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(../assets/backgroundAbout.jpg);
  background-size: cover;
  box-shadow: 0px 20px 50px 30px rgba(0, 0, 0, 0.6);
}

.container {
  margin-inline: auto;
  margin-block: 60px;
  padding-inline: 30px;
  max-width: 480px;
  font-family: "Inter", sans-serif;
}

img {
  height: 130px;
  width: 130px;
  object-fit: cover;
  border-radius: 50%;
  margin-top: -65px;
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.85);
  padding-inline: 20px;
}

header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-block: 20px;
}

header h3 {
  font-size: 1.5rem;
  font-family: "DM Serif Display", sans-serif;
  font-weight: 100;
}

header p {
  opacity: 65%;
}

main {
  margin-block: 20px;
}

footer {
  margin-block: 20px;
  display: flex;
  justify-content: center;
}

a {
  padding: 5px;
}

footer a:last-child {
  margin-top: -2px;
}

i {
  font-size: 25px;
}
</style>
