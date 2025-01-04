const container = document.querySelector(".card-container")

const header = document.querySelector(".card-header");
const title = document.querySelector(".card-title");
const desc = document.querySelector(".card-desc");

const authorInfo = document.querySelector(".author-info")
const authorPic = document.querySelector(".author-picture");
const authorName = document.querySelector(".author-name");
const authorDate = document.querySelector(".author-date");

setTimeout(getData, 2000)

function getData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="Laptop Image">'
    title.innerHTML = '<h3>Lorem ipsum dolor sit amet</h3>';
    desc.innerHTML = '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis</p>'
    authorPic.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="profile picture">'
    authorName.innerHTML = '<strong>John Doe</strong>'
    authorDate.innerHTML = '<small>Oct 08, 2020</small>'

    authorInfo.style.gap = 0;
    title.style.marginBottom = '20px';
    container.style.height = "430px"
}