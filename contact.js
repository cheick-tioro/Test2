document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Empêcher l'envoi réel du formulaire

        // Récupération des valeurs des champs
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Vérification des champs
        if (name === "" || email === "" || message === "") {
            alert("Veuillez remplir tous les champs !");
            return;
        }

        // Affichage du message de confirmation
        formMessage.classList.remove("hidden");

        // Réinitialiser le formulaire après 2 secondes
        setTimeout(() => {
            form.reset();
            formMessage.classList.add("hidden");
        }, 2000);
    });
});
