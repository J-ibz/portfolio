<template>
  <section>
    <div class="container" id="contact">
      <div class="form-container">
        <h2>Envie de travailler ensemble ?</h2>
        <p>N'hésitez pas à me contacter en soumettant le formulaire ci-dessous et je vous répondrai dans les plus brefs délais !</p>
        <form action="https://formsubmit.co/ae2cf3bd1c604a1b3b2dcd47af0422fd" method="POST">
          <div class="input name">
            <label for="name">Name</label>
            <input type="text" name="name" required />
          </div>
          <div class="input email">
            <label for="email">Email</label>
            <input type="email" name="email" required />
          </div>
          <div class="input message">
            <label for="message">Message</label>
            <textarea placeholder="Say Hi! 👋" maxlength="5000" name="message" required></textarea>
          </div>
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="http://localhost:8080/thanks" />
          <button type="submit" class="submit-button">Envoyer</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactSection",
};
</script>

<style scoped>
section {
  padding: 30px;
}
.container {
  margin-inline: auto;
  margin-block: 60px;
  max-width: 1200px;
  font-family: "Inter", sans-serif;
  color: #000;
}

.form-container {
  background-color: #e9e9e9;
  padding: 30px;
}

.container h2 {
  max-width: 450px;
  font-family: "DM Serif Display", sans-serif;
  font-size: 28px;
  font-weight: 400;
}

.form-container > p {
  opacity: 65%;
  margin-block: 15px 30px;
  font-size: 14px;
}

form {
  color: #000;
  display: grid;
  grid-column-gap: 20px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "name email"
    "message message"
    "submit submit";
}

.input {
  display: flex;
  flex-direction: column;
}

label {
  text-transform: uppercase;
  font-size: 11px;
  letter-spacing: 2px;
  font-weight: bold;
  margin-block: 0 5px;
  color: #333333;
}

input {
  display: block;
  width: 100%;
  height: 38px;
  padding: 8px 12px;
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #333333;
  background-color: #ffffff;
  border: 1px solid #cccccc;
}

input:focus {
  outline: none;
  border: 1px solid #4d90fe;
}
textarea {
  display: block;
  resize: vertical;
  width: 100%;
  height: auto;
  padding: 8px 12px;
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #333333;
  background-color: #ffffff;
  border: 1px solid #cccccc;
}

textarea:focus {
  outline: none;
  border: 1px solid #4d90fe;
}
.name {
  grid-area: name;
}

.email {
  grid-area: email;
}

.message {
  grid-area: message;
}

.submit-button {
  grid-area: submit;
  margin-left: auto;
  padding: 10px 15px;
  background-color: var(--tertiary);
  border-radius: 5px;
  border: none;
  user-select: none;
  color: #fff;
  margin-block: 13.33px 0;
  cursor: pointer;
}

@media screen and (max-width: 580px) {
  form {
    grid-template-columns: 1fr;
    grid-template-areas:
      "name"
      "email"
      "message"
      "submit ";
  }
}

@media screen and (max-width: 700px) {
  section {
    padding: 15px;
  }

  .container {
    margin-block: 30px;
  }
}
</style>
