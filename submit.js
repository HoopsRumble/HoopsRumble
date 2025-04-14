document.getElementById("formulaire").addEventListener("submit", function(e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  fetch("https://SCRIPT_URL", {
    method: "POST",
    body: data
  }).then(response => {
    document.getElementById("confirmation").textContent = "Inscription enregistrée avec succès !";
    form.reset();
  }).catch(error => {
    document.getElementById("confirmation").textContent = "Erreur lors de l'envoi.";
  });
});
