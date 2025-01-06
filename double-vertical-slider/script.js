const descContainer = document.querySelector(".description-container");
const imgContainer = document.querySelector(".img-container");
const upBtn = document.querySelector(".up");
const downBtn = document.querySelector(".down");

let currentIndex = 0; 
const totalSlides = document.querySelectorAll(".description").length;

downBtn.addEventListener("click", () => {
    currentIndex++; 
    if (currentIndex >= totalSlides) currentIndex = 0; 
    updateSlider();
});

upBtn.addEventListener("click", () => {
    currentIndex--; 
    if (currentIndex < 0) currentIndex = totalSlides - 1; 
    updateSlider();
});

function updateSlider() {
    descContainer.style.transform = `translateY(${-100 * currentIndex}vh)`;
    imgContainer.style.transform = `translateY(calc(-100vh * ${(totalSlides - 1) - currentIndex}))`;

    descContainer.style.transition = "transform 0.5s ease-in-out";
    imgContainer.style.transition = "transform 0.5s ease-in-out";
}
