AOS.init({
  duration: 1000,
  once: true
});

const carousel = document.getElementById('carouselImages');
const dots = document.querySelectorAll('.dot');
const totalSlides = dots.length;
let index = 0;
let interval = setInterval(nextSlide, 3000);

function nextSlide() {
  index = (index + 1) % totalSlides;
  updateCarousel();
}

function updateCarousel() {
  carousel.style.transition = 'transform 1s ease-in-out';
  carousel.style.transform = `translateX(-${index * 100}%)`;
  updateDots();
}

function updateDots() {
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    clearInterval(interval);
    index = parseInt(dot.getAttribute('data-index'));
    updateCarousel();
    interval = setInterval(nextSlide, 3000);
  });
});
