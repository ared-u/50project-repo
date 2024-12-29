const remainingDiv = document.querySelector(".remaining")
const percentFullDiv = document.querySelector(".percent-full")
const glasses = document.querySelectorAll(".glass")
const liters = document.querySelector(".liters")

glasses.forEach((glass, index) => {
    glass.addEventListener("click", () => {
        if (glass.classList.contains("full") && (index === 0))
            updateGlasses(index - 1)
        else {
            updateGlasses(index)
        }
    })
})

function updateGlasses(index) {
    glasses.forEach((glass, i) => {
        if (i <= index) {
            glass.classList.add("full");
        } else {
            glass.classList.remove("full");
        }
    });

    //updating the water-container
    const percentage = ((index + 1) / glasses.length) * 100;
    percentFullDiv.style.height = percentage + "%";
    percentFullDiv.innerHTML = `${percentage}%`

    const remaining = 2 - (2 * (index + 1)/ glasses.length)
    liters.textContent = `${remaining}L`

    if (percentage === 100) {
        remainingDiv.style.opacity = 0;
        remainingDiv.style.height = 0
    } else if (percentage === 0) {
        percentFullDiv.style.opacity = 0;
        percentFullDiv.style.height = 0
    } else {
        percentFullDiv.style.opacity = 1;
        remainingDiv.style.opacity = 1;
    }
}
