//BETTER CODE

const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeExpandClasses()
        panel.classList.add('expand')
    })
})

const removeExpandClasses = () => {
    panels.forEach(panel => {
        panel.classList.remove('expand')
    })
}

/* OLD CODE

const panels = document.getElementsByClassName("panel");

Array.from(panels).forEach(panel => { 
    panel.addEventListener("click", () => {
        if (panel.classList.contains("expand")) {
            return;
        } else {
            Array.from(panels).forEach(p => p.classList.remove("expand"));
            panel.classList.add("expand");
        }
    });
});
*/





