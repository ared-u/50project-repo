const search = document.getElementById("search");
const form = document.getElementById("form");
const main = document.getElementById("main");

form.addEventListener("submit", e => {
    e.preventDefault();

    const username = search.value.trim();
    const url = `https://api.github.com/users/${username}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                main.classList.add("active");
                main.innerHTML = `<h1 class="error">Username not found</h1>`;
                throw new Error(`Error: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            main.classList.add("active");
            main.innerHTML = `
                <div class="user-img">
                    <img src="${data.avatar_url}" alt="${data.name}">
                </div>
                <div class="user-info">
                    <h1>${data.name}</h1>
                    <p>${data.bio}</p>
                    <div class="user-stats">
                        <span>${data.followers} <strong>Followers</strong></span>
                        <span>${data.following} <strong>Following</strong></span>
                        <span>${data.public_repos} <strong>Repos</strong></span>
                    </div>
                    <div class="user-projects"></div>
                </div>
            `;
            const reposUrl = `https://api.github.com/users/${username}/repos?sort=stars`;
            return fetch(reposUrl);
        })
        .then(response => response.json())
        .then(repos => {
            const topRepos = repos.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 5);

            const userProjects = document.querySelector('.user-projects');
            topRepos.forEach(repo => {
                const repoDiv = document.createElement('div');
                repoDiv.classList.add('repo');
                repoDiv.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
                userProjects.appendChild(repoDiv);
            });
        })
        .catch(error => {
            console.error(error);
        });
});
