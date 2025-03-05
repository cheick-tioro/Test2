// Vérifie si l'iframe PDF est bien chargé
document.addEventListener("DOMContentLoaded", function () {
    const pdfViewer = document.getElementById("pdf-viewer");

    if (!pdfViewer) {
        console.error("Erreur : Impossible de charger le document PDF.");
    } else {
        console.log("Le document PDF est bien affiché.");
    }
});
