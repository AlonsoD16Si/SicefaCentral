document.addEventListener("DOMContentLoaded", function () { 
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prevBtn");
    const nextBtn = document.querySelector(".nextBtn");

    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, idx) => {
            slide.style.display = "none";
            if (idx === index) {
                slide.style.display = "block";
            }
        });
    }

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    showSlide(currentIndex);
});
