const dropContainers = document.querySelectorAll('.drop');
const frame = document.querySelector('.frame');

frame.addEventListener('dragstart', dragStart);
frame.addEventListener('dragend', dragEnd);

for (const container of dropContainers) {
    container.addEventListener('dragover', dragOver);
    container.addEventListener('dragenter', dragEnter);
    container.addEventListener('dragleave', dragLeave);
    container.addEventListener('drop', dragDrop);
}

function dragStart() {
    this.classList.add('hold');
    setTimeout(() => this.classList.add('invisible'), 0);
}

function dragEnd() {
    this.classList.remove('hold', 'invisible');
    this.classList.add('frame');
}

function dragOver(e) {
    e.preventDefault(); 
}

function dragEnter(e) {
    e.preventDefault();
    this.classList.add('hovered');
}

function dragLeave() {
    this.classList.remove('hovered');
}

function dragDrop() {
    this.classList.remove('hovered');
    this.appendChild(frame);
}

/* BAD CODE THAT DOES NOT WORK

let isDragging = false;
let offsetX, offsetY;
let originalContainer = null;

frame.addEventListener('mousedown', (e) => {
    isDragging = true;

    originalContainer = frame.closest('.drop');

    offsetX = e.clientX - frame.offsetLeft;
    offsetY = e.clientY - frame.offsetTop;

    document.body.appendChild(frame);

    frame.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
  
        frame.style.left = `${e.clientX - offsetX}px`;
        frame.style.top = `${e.clientY - offsetY}px`;

        dropContainers.forEach(container => {
            const rect = container.getBoundingClientRect();
            if (
                e.clientX > rect.left &&
                e.clientX < rect.right &&
                e.clientY > rect.top &&
                e.clientY < rect.bottom
            ) {
                container.classList.add('active');
            } else {
                container.classList.remove('active');
            }
        });
    }
});
document.addEventListener('mouseup', () => {
    if (isDragging) {
        isDragging = false;
        frame.style.cursor = 'grab';

        const activeContainer = Array.from(dropContainers).find(container =>
            container.classList.contains('active')
        );

        if (activeContainer) {
            activeContainer.appendChild(frame);
        } else if (originalContainer) {
            originalContainer.appendChild(frame);
        }

        const parentContainer = frame.closest('.drop');
        const parentRect = parentContainer.getBoundingClientRect();

        frame.style.left = `${parentRect.left - parentContainer.offsetLeft}px`;
        frame.style.top = `${parentRect.top - parentContainer.offsetTop}px`;

        dropContainers.forEach(container => container.classList.remove('active'));
    }
});

*/