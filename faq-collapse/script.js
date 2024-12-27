const faqToggle = document.querySelectorAll(".faq-toggle");

faqToggle.forEach(toggle => {
    toggle.addEventListener("click", () => {
        toggle.parentElement.classList.toggle("active");
    })
})

