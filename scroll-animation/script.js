const animatedCards = document.querySelectorAll(".animate")

const checkCards = () => {
    animatedCards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const offset = 100;

        if (rect.top < window.innerHeight - offset) {
            card.classList.add("enabled");
          } else {
            card.classList.remove("enabled");
          }
    })
}

window.addEventListener("scroll", checkCards);

checkCards();