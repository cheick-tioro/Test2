document.addEventListener("DOMContentLoaded", function () {
    const background = document.getElementById("background");

    for (let i = 0; i < 50; i++) {
        let particle = document.createElement("div");
        particle.classList.add("particle");
        particle.style.top = Math.random() * window.innerHeight + "px";
        particle.style.left = Math.random() * window.innerWidth + "px";
        particle.style.animationDuration = (Math.random() * 3 + 2) + "s";
        particle.style.width = particle.style.height = (Math.random() * 6 + 4) + "px";
        background.appendChild(particle);
    }
});
