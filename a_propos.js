// Script pour une animation simple au chargement de la page
document.addEventListener("DOMContentLoaded", function () {
    const texte = document.querySelector(".texte");
    texte.style.opacity = "0";
    texte.style.transform = "translateY(20px)";

    setTimeout(() => {
        texte.style.transition = "opacity 1s ease-out, transform 1s ease-out";
        texte.style.opacity = "1";
        texte.style.transform = "translateY(0)";
    }, 500);
});
