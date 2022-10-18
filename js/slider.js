const btnPrev = document.querySelector('.slider__button_direction_prev');
const btnNext = document.querySelector('.slider__button_direction_next');
const sliderCarts = document.querySelector('.slider__carts');
const carts = document.querySelectorAll('.slider__cart');
const cart = document.querySelector('.slider__cart');
const dots = document.querySelectorAll('.slider__dot');

let activeSlides = 0;

btnPrev.addEventListener('click', () => {
  debounce(changeSlides('prev'), 5000, false);
});

btnNext.addEventListener('click', () => {
  debounce(changeSlides('next'), 5000, false);
});

function debounce(func, wait, immediate) {
  let timeout;

  return function executedFunction() {
    const context = this;
    const args = arguments;

    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
};

function changeSlides(direction) {
  if (direction === 'next') {
    activeSlides++;
    if (activeSlides === carts.length - 2) {
      activeSlides = 0;
    }
  } else if (direction === 'prev') {
    activeSlides--;
    if (activeSlides < 0) {
      activeSlides = carts.length - 3;
    }
  }

  const width = cart.clientWidth;

  sliderCarts.style.transform = `translatex(-${(activeSlides * width) + (30 * activeSlides)}px)`;


  let q = activeSlides;

  dots.forEach((dot) => {
    dot.classList.remove('slider__dot_active');
  })

  if (dots[q] = activeSlides + 1) {
    dots[q].classList.add('slider__dot_active');
    dots[q + 1].classList.add('slider__dot_active');
    dots[q + 2].classList.add('slider__dot_active');
  }
}







