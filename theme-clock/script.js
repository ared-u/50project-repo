const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondsEl = document.querySelector(".seconds");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggleBtn = document.querySelector(".toggle");

toggleBtn.addEventListener("click", () => {
    const html = document.querySelector("html")
    html.classList.toggle("dark");
   
    if (html.classList.contains("dark")) {
        toggleBtn.textContent = "Light Mode"
    } else {
        toggleBtn.textContent = "Dark Mode"
    }
})


function setTime() {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    const currentDate = new Date()
    const [seconds, minutes, hours, clockHours, date, month, day] = [
        currentDate.getSeconds(),
        currentDate.getMinutes(),
        currentDate.getHours(),
        currentDate.getHours() % 12,
        currentDate.getDate(),
        currentDate.getMonth(),
        currentDate.getDay()
    ]
    
    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(clockHours, 0, 11, 0, 360)}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;
    secondsEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;

    timeEl.innerHTML = `${hours}:${minutes} ${(hours >= 12) && (hours < 24) ? 'PM' : 'AM'}`
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span>${date}</span>`
}


const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }


setTime()

setInterval(setTime, 1000)