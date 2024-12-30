const accessKey = 'byOP_SzjBxh3_cytGtfPoqGMS3O3l6jPfjWJXWU4i0s'
const url = 'https://api.unsplash.com/search/photos?query=nature&per_page=5&page=1'

const backgroundImg = document.querySelector('.background-img')
const foregroundImg = document.querySelector('.foreground-img')
const buttonRight = document.querySelector('.right');
const buttonLeft = document.querySelector('.left');

let currentIndex = 0;

function updateImg(index) {
    fetch(url, { headers: {
        'Authorization': `Client-ID ${accessKey}`,  
    },})
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok')
        } 
        return response.json();
    })
    .then(data => {
        const imageUrls = data.results.map(result => result.urls.regular);
        backgroundImg.style.backgroundImage = `url(${imageUrls[index]})`;
        foregroundImg.style.backgroundImage = `url(${imageUrls[index]})`;
    })
    .catch(error => {
        console.error('Error:', error);
    })
}

buttonRight.addEventListener('click', () => {
    if (currentIndex < 4) {
        currentIndex++
        updateImg(currentIndex);
    }
});


buttonLeft.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--; 
        updateImg(currentIndex)
    }
});

updateImg(currentIndex)