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
  slideToClickedSlide: false,
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
    el: ".feedback-slider .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".feedback-slider .slider-button-next",
    prevEl: ".feedback-slider .slider-button-prev",
  },
};

const vacancySliderOptions = {
  slidesPerView: 3,
  grid: {
    rows: 2,
    fill: "row",
  },
  spaceBetween: 24,
  pagination: {
    el: ".vacancy-slider .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".vacancy-slider .slider-button-next",
    prevEl: ".vacancy-slider .slider-button-prev",
  },
};

initSlider(".feedback-slider", feedbackSliderOptions);
initSlider(".vacancy-slider", vacancySliderOptions);

/** Switch Tabs */

const tabsBlock = document.querySelectorAll(".switch_tabs");
let tabContent;
tabsBlock.forEach((item) => {
  item.addEventListener("click", function (e) {
    let curentTabs = this.children;
    let activeTab = e.target;
    tabContent = activeTab
      .closest(".tab-wrapper")
      .querySelector(".tab_content");
    setActiveTab(activeTab, curentTabs, tabContent);
  });
});

function setActiveTab(activeTab, tabsElements, tabContent) {

  if (activeTab.classList.contains("s-tab")) {
    for (let i = 0; i < tabsElements.length; i++) {
      tabsElements[i].classList.remove("active");
    }
    activeTab.classList.add("active");
  } else {
    return;
  }
}
