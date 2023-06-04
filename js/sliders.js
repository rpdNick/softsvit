function initSlider(sliderElement, sliderOptions) {
  let swiper = new Swiper(sliderElement, sliderOptions);
}

const feedbackSliderOptions = {
  effect: "coverflow",
  centeredSlides: true,
  slidesPerView: 3,
  longSwipesMs: 0,
  loopPreventsSlide: false,
  longSwipes: true,
  longSwipesRatio: 0,
  threshold: 0,
  slideToClickedSlide: false,
  speed: 400,
  loop: true,
  loopedSlides: 2,
  updateOnWindowResize:true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    // slideShadows: true,
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      effect: "slide",
      slidesPerView: 1.07,
      spaceBetween: 12,
      centeredSlides: false,
      loop: false,
      updateOnWindowResize:true,
    },
    // when window width is >= 575px
    575: {
      effect: "slide",
      slidesPerView: 2,
      spaceBetween: 24,
      centeredSlides: false,
      loop: false,
      updateOnWindowResize:true,
    },
    768: {
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
      updateOnWindowResize:true,
    },
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


const whySoftsvitSliderOptions = {
  slidesPerView: 3,
  grid: {
    rows: 2,
    fill: "row",
  },
  spaceBetween: 24,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.1,
      grid: {
        rows: 1,
      },
      spaceBetween: 12,
    },
    // when window width is >= 575px
    575: {
      slidesPerView: 2,
      grid: {
        rows: 1,
      },
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 3,
      grid: {
        rows: 2,
        fill: "row",
      },
      spaceBetween: 24,
    },
  },
  pagination: {
    el: ".why_softsvit_slider .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".why_softsvit_slider .slider-button-next",
    prevEl: ".why_softsvit_slider .slider-button-prev",
  },
};

const vacancySliderOptions = {
  slidesPerView: 3,
  grid: {
    rows: 2,
    fill: "row",
  },
  spaceBetween: 24,
  breakpoints: {
    320: {
      slidesPerView: 1.1,
      grid: {
        rows: 1,
      },
      spaceBetween: 12,
    },

    575: {
      slidesPerView: 2,
      grid: {
        rows: 1,
      },
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 3,
      grid: {
        rows: 2,
        fill: "row",
      },
      spaceBetween: 24,
    },
  },
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
initSlider(".why_softsvit_slider", whySoftsvitSliderOptions);

/** Switch Tabs */

const tabsBlock = document.querySelectorAll(".switch_tabs");
tabsBlock.forEach((item) => {
  item.addEventListener("click", function (e) {
    let curentTabs = this.children;
    let activeTab = e.target;
    let tabIndex = e.target.getAttribute("data-tab");

    let tabContentBlocks = activeTab
      .closest(".tab-wrapper")
      .querySelectorAll(".tab_content");

    tabContentBlocks.forEach((contentBlock) => {
      if (contentBlock.getAttribute("data-tab") == tabIndex) {
        setActiveTab(activeTab, curentTabs, contentBlock, tabContentBlocks);
      }
    });
  });
});

function setActiveTab(
  activeTab,
  tabsElements,
  currentContentBlock,
  tabContentBlocks
) {
  for (let i = 0; i < tabsElements.length; i++) {
    tabsElements[i].classList.remove("active");
    tabContentBlocks[i].classList.remove("active");
  }
  activeTab.classList.add("active");
  currentContentBlock.classList.add("active");
}
