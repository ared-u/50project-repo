
const counts = document.querySelectorAll(".count")

function increment(amount, index) {
    let incrementStart = 100;
    const incrementStep = Math.ceil(amount / 400)

    const interval = setInterval(() => {
        incrementStart += incrementStep
        if (incrementStart >= amount) {
            incrementStart = amount;
            clearInterval(interval);
        }

        counts[index].innerHTML = `${incrementStart}`;
    }, 1)

}

increment(12500, 0);
increment(5000, 1);
increment(7500, 2);

