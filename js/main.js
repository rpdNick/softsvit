function initSlider(sliderElement, sliderOptions) {
  let swiper = new Swiper(sliderElement, sliderOptions);
  return swiper;
}

const feedbackSliderOptions = {
  effect: "coverflow",
  centeredSlides: true,
  slidesPerView: 3,
  // longSwipesMs: 0,
  loopPreventsSlide: false,
  // longSwipes: true,
  // longSwipesRatio: 0,
  // threshold: 0,
  slideToClickedSlide: false,
  slideShadows: false,
  speed: 400,
  loop: true,
  loopedSlides: 2,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
  },

  breakpoints: {
    320: {
      effect: "slide",
      slidesPerView: 1.06,
      spaceBetween: 12,
      speed: 200,
      centeredSlides: false,
      slideShadows: false,
      loop: false,
    },

    432: {
      effect: "slide",
      slidesPerView: 1.3,
      spaceBetween: 12,
      speed: 200,
      centeredSlides: false,
      slideShadows: false,
      loop: false,
    },

    575: {
      effect: "slide",
      slidesPerView: 1.5,
      spaceBetween: 24,
      speed: 200,
      centeredSlides: false,
      slideShadows: false,
      loop: false,
    },

    640: {
      effect: "slide",
      slidesPerView: 1.8,
      spaceBetween: 24,
      speed: 200,
      centeredSlides: false,
      slideShadows: false,
      loop: false,
    },

    780: {
      effect: "slide",
      slidesPerView: 2,
      spaceBetween: 24,
      speed: 200,
      centeredSlides: false,
      slideShadows: false,
      loop: false,
    },

    919: {
      effect: "slide",
      slidesPerView: 2,
      spaceBetween: 40,
      speed: 200,
      centeredSlides: false,
      slideShadows: false,
      loop: false,
    },

    992: {
      effect: "coverflow",
      centeredSlides: true,
      slidesPerView: "auto",
      longSwipesMs: 0,
      loopPreventsSlide: false,
      longSwipes: true,
      longSwipesRatio: 0,
      threshold: 0,
      slideToClickedSlide: false,
      slideShadows: false,
      speed: 400,
      loop: true,
      loopedSlides: 2,
    },
  },

  pagination: {
    el: ".feedback-slider .swiper-pagination",
    clickable: false,
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
    320: {
      slidesPerView: 1.1,
      grid: {
        rows: 1,
      },
      spaceBetween: 12,
    },

    500: {
      slidesPerView: 1.5,
      grid: {
        rows: 1,
      },
      spaceBetween: 12,
    },

    769: {
      slidesPerView: 2,
      grid: {
        rows: 1,
      },
      spaceBetween: 24,
    },

    945: {
      slidesPerView: 2,
      grid: {
        rows: 2,
        fill: "row",
      },
      spaceBetween: 24,
    },

    1200: {
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

    617: {
      slidesPerView: 1.8,
      grid: {
        rows: 1,
      },
      spaceBetween: 24,
    },

    768: {
      slidesPerView: 2,
      grid: {
        rows: 1,
      },
      spaceBetween: 24,
    },

    1109: {
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

let feedback = initSlider(".feedback-slider", feedbackSliderOptions);
window.addEventListener("resize", function () {
  if (feedback) {
    // reInit slider
    feedback.destroy();
    feedback = initSlider(".feedback-slider", feedbackSliderOptions);

    if (window.innerWidth >= 992) {
      feedbackSliderAnimation(feedback);
    } else {
      return;
    }
  }
});

// Feedback slider animation on change

function feedbackSliderAnimation(slider) {
  slider.on("slideChange", function (event) {
    var activeSlide = this.slides[this.activeIndex];
    const slides = document.querySelectorAll(".feedback-slider .swiper-slide");
    slides.forEach((slide) => {
      slide.classList.remove("play-animation");
    });
    activeSlide.classList.add("play-animation");

    setTimeout(() => {
      activeSlide.classList.remove("play-animation");
    }, 1100);
  });
}

if (window.innerWidth >= 992) {
  feedbackSliderAnimation(feedback);
}

let vacancySlider = initSlider(".vacancy-slider", vacancySliderOptions);

initSlider(".why_softsvit_slider", whySoftsvitSliderOptions);

function reDrawVacancySlider() {
  vacancySlider.updateSlides();
  vacancySlider.updateSlidesClasses();
  vacancySlider.updateSize();
  vacancySlider.update();

  /**If you need to destroy this slider */
  // vacancySlider.destroy();
  // vacancySlider = initSlider(".vacancy-slider", vacancySliderOptions);

  sliderCardsHendler();
}

let queryLoaderTemplate = `<div class="preloader_wrapper active" id="query-loader">
<div class="preloader">
  <hr>
  <hr>
  <hr>
  <hr>
  <hr>
</div>
</div>`;

/** Switch Tabs logic*/

const tabs = document.querySelectorAll(".switch_tabs .s-tab");
tabs.forEach((tab) => {
  tab.addEventListener("click", function (e) {
    let activeTab = e.target;
    let tabId = e.target.getAttribute("data-category");

    // http query
    if (tabId) {
      const swiperWrapper = document.querySelector(
        ".vacancy-slider .swiper-wrapper"
      );
      swiperWrapper.classList.add("loading");
      const sliderCard = document
        .querySelector(".vacancy-slider .swiper-slide")
        .cloneNode(true);
      fetch("./sliderData.json", {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      })
        .then((resp) => resp.text())
        .then((dataText) => {
          setTimeout(() => {
            const data = JSON.parse(dataText);
            let cardsHTML = "";

            // slider content
            data.forEach((cardItem) => {
              cardsHTML += `<div class="swiper-slide">
                <div class="slide-content">
                <div class="info-wrap">
                  <div class="info">
                    <div class="title">${cardItem.post_title}</div>
                    <div class="description">${cardItem.acf.details}</div>
                  </div>
                  <div class="vacancy-badge">
                    <span>${cardItem.acf.level}</span>
                  </div>
                </div>
                <div class="buttons-wrap">
                  <button class="button transparrent green_border" data-popup="friend-cv">Порадити фахівця</button>
                  <button class="button filling_bg" data-popup="my-cv">подати заявку</button>
                </div>
              </div>
            </div>`;
            });

            swiperWrapper.innerHTML = cardsHTML;

            tabs.forEach((item) => {
              item.classList.remove("active-cat");
            });
            activeTab.classList.add("active-cat");
            e.preventDefault;
            swiperWrapper.classList.remove("loading");
            reDrawVacancySlider();
          }, 1000);
        });

      // http query
    }
  });
});

//------- Modal logic

const pageBody = document.querySelector("body");
const popupOverlay = document.querySelector(".overlay");
// const popupLoader = document.getElementById("preloader");

let closeButton = document.querySelectorAll(".close-modal");

closeButton.forEach(function (el) {
  el.addEventListener("click", function () {
    closePopup(this);
  });
});

function closePopup(button) {
  pageBody.classList.remove("modal_open");
  button.closest(".modal").classList.remove("active");
}

function sliderCardsHendler() {
  const vacancySliderCards = document.querySelectorAll(
    ".vacancy-slider .slide-content"
  );

  vacancySliderCards.forEach(function (card) {
    let modal;
    card.addEventListener("click", function (e) {
      if (e.target.getAttribute("data-popup") == "friend-cv") {
        modal = document.getElementById("friend-cv-popup");
      } else {
        modal = document.getElementById("my-cv-popup");
      }
      showModal(modal);
    });
  });
}

sliderCardsHendler();

function showModal(modal) {
 let modalLoader = document.getElementById("page-loader");
 modalLoader.classList.add("active");
 pageBody.classList.add("loading");
  // run query
  // const id = button.getAttribute("data-post-id");
  fetch(`./data.json`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    // fetch(`/wp-json/wp/v2/posts/${id}`)
    .then((response) => response.text())
    .then((dataText) => {
      setTimeout(() => {
        const data = JSON.parse(dataText);
        const htmlTitle = data.title.rendered;
        const htmlDescription = data.content.rendered;
        modal.querySelector(".title").innerHTML = htmlTitle;
        modal.querySelector(".description_content").innerHTML = htmlDescription;
        modal.querySelector(".title-value").value = htmlTitle;
        modalLoader.classList.remove("active");
        pageBody.classList.remove("loading");
        showOverlay();
        modal.classList.add("active");
      }, 1000);
    })
    .catch((error) => {
      console.log(error);
    });
}

function showOverlay() {
  pageBody.classList.add("modal_open");
  popupOverlay.classList.add("active");
}
