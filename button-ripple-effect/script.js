const btn = document.querySelector(".btn")

btn.addEventListener("click", function (e) {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top;

    const ripple = document.createElement("div");
    ripple.classList.add("ripple");
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    btn.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600); 
});