const btn = document.querySelector(".btn");
const notifications = document.querySelector(".notifications");

const messages = ["Message One", "Message Two", "Message Three", "Message Four"];
const types = ["info", "success", "error"];

btn.addEventListener("click", createNotif)

function createNotif() {
    const toastEl = document.createElement("div")
    toastEl.classList.add('toast')
    toastEl.classList.add(`${types[Math.floor(Math.random() * types.length)]}`)
    toastEl.innerHTML = `${messages[Math.floor(Math.random() * messages.length)]}`
    notifications.appendChild(toastEl)

    setTimeout(() => {
        toastEl.remove();
    }, 4000);
}

