const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const incrementBtn = document.querySelector(".inc");
const decrementBtn = document.querySelector(".dec");
const sizeDisplay = document.querySelector(".size");
const colourSelect = document.querySelector(".color");
const clearBtn = document.querySelector(".clear");

let isDrawing = false;
let x = 0;
let y = 0;
let size = 10;
let color = "#000"; 


canvas.addEventListener("mousedown", (event) => {
    isDrawing = true;
    [x, y] = [event.offsetX, event.offsetY];
});

canvas.addEventListener("mouseup", () => (isDrawing = false));

canvas.addEventListener("mouseleave", () => (isDrawing = false));

canvas.addEventListener("mousemove", (event) => {
    if (!isDrawing) return;

    ctx.lineWidth = size;
    ctx.lineCap = "round";
    ctx.strokeStyle = color;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();

    [x, y] = [event.offsetX, event.offsetY];
});


incrementBtn.addEventListener("click", () => {
    size = Math.min(size + 5, 50); 
    sizeDisplay.textContent = size;
});

decrementBtn.addEventListener("click", () => {
    size = Math.max(size - 5, 5); 
    sizeDisplay.textContent = size;
});

colourSelect.addEventListener("input", (event) => {
    color = event.target.value;
});

clearBtn.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});
