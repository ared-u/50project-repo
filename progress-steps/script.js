const steps = document.querySelectorAll(".step");
const bar = document.querySelector(".bar")
const previousBtn = document.querySelector(".previous-btn");
const nextBtn = document.querySelector(".next-btn");

let currentActive = 1

previousBtn.addEventListener("click", () => {
   if (currentActive > 1) {
    steps[currentActive - 1].classList.remove('active');
    currentActive--;
    updateBar();
   }
   updateButtons() 
})

nextBtn.addEventListener("click", () => {
    if (currentActive < steps.length) {
        steps[currentActive].classList.add('active');
        currentActive++;
        updateBar();
       } 
    updateButtons() 
})

const updateButtons = () => {
    if (currentActive === 1) {
        previousBtn.classList.remove("enabled");
    } else {
        previousBtn.classList.add("enabled");
    }
    if (currentActive === steps.length) {
        nextBtn.classList.remove("enabled");
    } else {
        nextBtn.classList.add("enabled");
    }
}


const updateBar = () => {
    const progress = 320 * ((currentActive - 1) / (steps.length - 1));
    bar.style.setProperty('--progress', `${progress}px`);
}