<script setup>
import { onMounted } from "vue";
onMounted(() => {
  document.querySelector('body').style.background = '#fff'
  document.querySelector('#message').innerHTML = 'Bonjour, \n' +
      '\n' +
      'Je vous contact à la suite de la découverte de votre dossier de partenariat.\n' +
      '\n' +
      'Je serais intéressé par votre projet et j’aimerais avoir plus de détails sur ce dernier. \n' +
      '\n' +
      'Serait-il possible de convenir d’un rendez-vous afin d’en discuter plus en détail ?\n' +
      '\n' +
      'Cordialement,\n'
  document.querySelector('#submit-btn').addEventListener('click', () => {
    const email = 'test@test.com'
    const objet = document.querySelector('#objet').value
    const message = document.querySelector('#message').value

    const mailToLink = `mailto:${email}?subject=${encodeURIComponent(objet)}&body=${encodeURIComponent(message)}`
    window.location.href = mailToLink
  })
})
</script>

<template>
  <div class="ms-5 me-5">
    <form id="form" class="d-flex justify-content-center align-items-center flex-wrap mt-4">
      <div class="mb-3">
        <input type="text" id="objet" class="border" placeholder="Objet" required>
      </div>
      <div class="mb-3">
        <input type="text" class="border" id="BrandInput" placeholder="Nom de l'entreprise" required>
      </div>
      <div class="mb-3">
        <textarea class="border" id="message" rows="3" placeholder="Votre messaege" required></textarea>
      </div>

      <button type="button" id="submit-btn">Envoyer</button>
    </form>
  </div>

</template>

<style scoped>
body {
  background: inherit;
}
#form input {
  border-radius: 20px;
  border-color: #000 !important;
  width: 414px;
  height: 72px;
  padding-left: 5px;
}
#form textarea {
  border-radius: 20px;
  border-color: #000 !important;
  height: 317px;
  width: 414px;
  padding-top: 5px;
  padding-left: 5px;
}
#form div {
  flex-basis: 100%;
  text-align: center;
}
#submit-btn {
  border-radius: 30px;
  border: none;
  width: 414px;
  height: 72px;
  background-color: #725643;
  color: white;
  font-size: 32px;
}
</style>