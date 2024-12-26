const btn = document.querySelector(".btn")
const outputDiv = document.querySelector(".output-div")

function getJoke() {
    const apiURL = "https://icanhazdadjoke.com/";

    fetch(apiURL, {
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            outputDiv.innerHTML = `${data.joke}`;
        })
        .catch(error => {
            console.error('Error:', error);
        })
}

btn.addEventListener("click", getJoke)