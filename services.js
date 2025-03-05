// Animation au chargement des services
document.addEventListener("DOMContentLoaded", function () {
    const services = document.querySelectorAll(".service");

    services.forEach((service, principal) => {
        service.style.opacity = "0";
        service.style.transform = "translateY(20px)";
        setTimeout(() => {
            service.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
            service.style.opacity = "1";
            service.style.transform = "translateY(0)";
        }, 200 * principal);
    });
});
