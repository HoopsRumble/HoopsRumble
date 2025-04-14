document.getElementById("formulaire").addEventListener("submit", function(e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  fetch("https://script.google.com/macros/s/AKfycbzg-y7YNU9OOzrrRwEsEO9O0AItFPfskpFFJLMc-tQrAc4Ro6icXY3FI2xtncB2k-9peA/exec", {
    method: "POST",
    body: data
  }).then(response => {
    document.getElementById("confirmation").textContent = "Inscription enregistrée avec succès !";
    form.reset();
  }).catch(error => {
    document.getElementById("confirmation").textContent = "Erreur lors de l'envoi.";
  });
});
