const background = document.querySelector(".background");
const displayText = document.querySelector(".display-text");

let progress = 0;

const updateLoading = () => {
    progress++;
    
    displayText.textContent = `${progress}%`;
    displayText.style.opacity =  scale(progress, 0, 100, 1, 0);
    background.style.filter = `blur(${scale(progress, 0, 100, 30, 0)}px)`

    if (progress > 100) progress = 100

    if (progress < 100) {
        const delay = Math.random() * 200 + 50;
        setTimeout(updateLoading, delay);
    } 
}

// map larger range into a smaller one
const scale = (num, inMin, inMax, outMin, outMax) => {
    return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}


updateLoading()