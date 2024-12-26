const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('focus', () => {
        const label = document.querySelector(`#${input.id}Label`);
        const spans = label.querySelectorAll('span');

        spans.forEach((span, index) => {
            span.style.transitionDelay = `${index * 50}ms`;
            span.style.transform = 'translateY(-30px)';
            span.style.color = 'lightblue';
        });
    });

    input.addEventListener('blur', () => {
        const label = document.querySelector(`#${input.id}Label`);
        const spans = label.querySelectorAll('span');

        spans.forEach((span, index) => {
            span.style.transitionDelay = `${index * 50}ms`;
            span.style.transform = 'translateY(0)';
            span.style.color = '#fff';
        });
    });
});
