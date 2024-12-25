const containers = document.querySelectorAll(".container")
const psContainer = document.querySelector(".ps5");
const xbContainer = document.querySelector(".xbox");
const psText = document.querySelector(".ps-text")
const xbText = document.querySelector(".xb-text")

psContainer.addEventListener("mouseenter", () => {
    document.documentElement.style.setProperty("--ps-width", "70%")
    document.documentElement.style.setProperty("--xb-width", "30%")
})
xbContainer.addEventListener("mouseenter", () => {
    document.documentElement.style.setProperty("--xb-width", "70%")
    document.documentElement.style.setProperty("--ps-width", "30%")
})

containers.forEach(container => {
    container.addEventListener("mouseleave", () => {
        document.documentElement.style.setProperty("--xb-width", "50%")
        document.documentElement.style.setProperty("--ps-width", "50%")
    })
})