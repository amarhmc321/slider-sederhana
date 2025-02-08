let index = 0;
let autoSlide;

function moveSlide(step) {
    const slides = document.querySelector(".slider");
    const totalSlides = document.querySelectorAll(".slide").length;

    index += step;
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;

    updateSlide();
}

function setSlide(n) {
    index = n;
    updateSlide();
}

function updateSlide() {
    const slides = document.querySelector(".slider");
    const dots = document.querySelectorAll(".dot");

    slides.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

// Auto-slide setiap 4 detik
function startAutoSlide() {
    autoSlide = setInterval(() => moveSlide(1), 4000);
}

function pauseSlide() {
    clearInterval(autoSlide);
}

function resumeSlide() {
    startAutoSlide();
}

document.addEventListener("DOMContentLoaded", () => {
    startAutoSlide();
    updateSlide();
});
