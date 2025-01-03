const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

const form = document.getElementById('form')
const search = document.querySelector(".search")
const main = document.querySelector(".main")

getFilms(API_URL)

async function getFilms(url) {
    const res = await fetch(url)
    const data = await res.json()

    showFilms(data.results)
}


function showFilms(films) {
    main.innerHTML = ``;

    films.forEach((film) => {
        const {title, poster_path, vote_average, overview} = film
        filmDiv = document.createElement("div");
        filmDiv.classList.add("film");

        filmDiv.innerHTML = `<img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="film-desc">
                <h3>${title}</h3>
                <span class="${colouredRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="film-overview">
                <h3>Overview</h3>
                <p>${overview}</p>
            </div>`
        main.appendChild(filmDiv)
    })
}

function colouredRate(vote) {
    if (vote >= 8) {
        return 'green'
    } else if (vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const searchTerm = search.value;

    if (searchTerm && searchTerm !== '') {
        getFilms(SEARCH_API + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
    }
})