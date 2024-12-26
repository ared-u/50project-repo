const btns = document.querySelectorAll(".btn");

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        stopAudio()
        const audio = document.querySelector(`#${btn.innerText}`)
        audio.play()
    })
})

function stopAudio() {
   const audios = document.querySelectorAll("audio")
   audios.forEach(audio => {
        audio.pause()
        audio.currentTime = 0;
   })
}