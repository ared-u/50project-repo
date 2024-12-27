const textInput = document.querySelector(".text-input");
const tagContainer = document.querySelector(".tags");

let isEntered = false;

textInput.addEventListener("input", () => {
    const words = textInput.value.split(',').map(word => word.trim()).map(word => word.replace(/\s+/g, ' '));

    if (textInput.value.endsWith(",")) {
        words.forEach(word => {
            if (word) {
                const tag = document.createElement('span');
                tag.classList.add('tag');
                tag.innerHTML = `${word} <button class="btn"><i class="fa-solid fa-x" style="color: #ffffff;"></i></button>`;
                tagContainer.appendChild(tag);
            }
        });
        textInput.value = '';
    }
});

window.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();

        if (isEntered) {
            textInput.value = '';
            tagContainer.innerHTML = '';
            isEntered = false;
        } else {
            textInput.blur();

            const tags = tagContainer.querySelectorAll(".tag");
            if (tags.length > 0) {
                let interval;
                interval = setInterval(() => {
                    tags.forEach(tag => tag.classList.remove("select"));
                    
                    const randomTag = tags[Math.floor(Math.random() * tags.length)];
                    randomTag.classList.add("select");
                }, 200)

                setTimeout(() => {
                    clearInterval(interval);
                    tags.forEach(tag => tag.classList.remove("select"));

                    const randomTag = tags[Math.floor(Math.random() * tags.length)];
                    randomTag.classList.add("select");
                }, 3000)
            }
        }
    }
})


tagContainer.addEventListener("click", (event) => {
    if (event.target && event.target.matches("button.btn")) {
        event.target.parentElement.remove();
    }
});


