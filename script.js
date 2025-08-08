document.addEventListener('DOMContentLoaded', () => {
    const maravilhas = document.querySelectorAll('.maravilha');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    maravilhas.forEach(maravilha => {
        maravilha.style.opacity = 0;
        maravilha.style.transform = 'translateY(20px)';
        maravilha.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(maravilha);
    });
});