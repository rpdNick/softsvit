function initSlider(sliderElement, sliderOptions) {
  let swiper = new Swiper(sliderElement, sliderOptions);
}

const feedbackSliderOptions = {
  effect: "coverflow",
  centeredSlides: true,
  slidesPerView: "auto",
  longSwipesMs: 0,
  loopPreventsSlide: false,
  longSwipes: true,
  longSwipesRatio: 0,
  threshold: 0,
  slideToClickedSlide: true,
  speed: 400,
  loop: true,
  loopedSlides: 2,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    // slideShadows: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".slider-button-next",
    prevEl: ".slider-button-prev",
  },
};

initSlider(".feedback-slider", feedbackSliderOptions);
