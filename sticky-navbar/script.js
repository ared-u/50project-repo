const header = document.querySelector("header")

window.addEventListener("scroll", changeHeader)

function changeHeader() {
    if (window.scrollY > header.offsetHeight + 100) {
        header.classList.add("active")
    } else {
        header.classList.remove("active")
    }
}