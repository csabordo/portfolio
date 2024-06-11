document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.carousel-indicator');

    let currentIndex = 0;

    function showSlide(index) {
        carousel.style.transform = `translateX(-${index * 100}%)`;
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
    }

    document.querySelector('.carousel-control.prev').addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
        showSlide(currentIndex);
    });

    document.querySelector('.carousel-control.next').addEventListener('click', () => {
        currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
        showSlide(currentIndex);
    });

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });

    showSlide(currentIndex);
});
