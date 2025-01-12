const img = document.querySelector(".img");
const likesSpan = document.querySelector(".likes");

let likes = 0;

img.addEventListener("dblclick", () => {
    likes++
    likesSpan.textContent = likes;
    showHeart(event)
})

function showHeart(event) {
    const heart = document.createElement('div');
    heart.textContent = `❤️`;
    heart.classList.add('heart');
    heart.style.left = `${event.offsetX}px`;
    heart.style.top = `${event.offsetY}px`;
    img.appendChild(heart);
    setTimeout(() => heart.remove(), 2000)
}