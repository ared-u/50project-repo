const output = document.querySelector(".output")

window.addEventListener("keydown", (e) => {
    output.innerHTML = `
    <div class="key">
        <span>event.key</span>
        ${e.key === ' ' ? 'Space' : e.key}
    </div>
    <div class="key">
        <span>event.keyCode</span>
        ${e.keyCode}
    </div>
    <div class="key">
        <span>event.code</span>
        ${e.code}
    </div>
    `
})