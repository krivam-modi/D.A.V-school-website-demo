// Hero slider
const slides = document.querySelectorAll('.hero-slide');
const dotsBox = document.querySelector('.hero-dots');
let current = 0;
let timer;

slides.forEach((_, i) => {
  const dot = document.createElement('button');
  dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
  dot.addEventListener('click', () => { showSlide(i); restartTimer(); });
  dotsBox.appendChild(dot);
});
const dots = dotsBox.querySelectorAll('button');

function showSlide(index) {
  slides[current].classList.remove('active');
  dots[current].classList.remove('active');
  current = index;
  slides[current].classList.add('active');
  dots[current].classList.add('active');
}

function restartTimer() {
  clearInterval(timer);
  timer = setInterval(() => showSlide((current + 1) % slides.length), 5000);
}

dots[0].classList.add('active');
restartTimer();
// Gallery lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');

document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    lightboxImg.src = item.dataset.src;
    lightbox.classList.add('open');
  });
});

function closeLightbox() {
  lightbox.classList.remove('open');
  lightboxImg.src = '';
}

lightbox.addEventListener('click', e => {
  if (e.target !== lightboxImg) closeLightbox();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
});
