function initSlider(sliderElement, sliderOptions) {
  let swiper = new Swiper(sliderElement, sliderOptions);
  return swiper;
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
  slideShadows: false,
  speed: 400,
  loop: true,
  loopedSlides: 2,
  updateOnWindowResize: true,
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
      centeredSlides: false,
      slideShadows: false,
      loop: false,
      updateOnWindowResize: true,
    },

    432: {
      effect: "slide",
      slidesPerView: 1.3,
      spaceBetween: 12,
      centeredSlides: false,
      slideShadows: false,
      loop: false,
      updateOnWindowResize: true,
    },

    575: {
      effect: "slide",
      slidesPerView: 1.5,
      spaceBetween: 24,
      centeredSlides: false,
      slideShadows: false,
      loop: false,
      updateOnWindowResize: true,
    },

    640: {
      effect: "slide",
      slidesPerView: 1.8,
      spaceBetween: 24,
      centeredSlides: false,
      slideShadows: false,
      loop: false,
      updateOnWindowResize: true,
    },

    780: {
      effect: "slide",
      slidesPerView: 2,
      spaceBetween: 24,
      centeredSlides: false,
      slideShadows: false,
      loop: false,
      updateOnWindowResize: true,
    },

    919: {
      effect: "slide",
      slidesPerView: 2,
      spaceBetween: 40,
      centeredSlides: false,
      slideShadows: false,
      loop: false,
      updateOnWindowResize: true,
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
      updateOnWindowResize: true,
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
      updateOnWindowResize: true,
      grid: {
        rows: 1,
      },
      spaceBetween: 12,
    },

    617: {
      slidesPerView: 1.8,
      updateOnWindowResize: true,
      grid: {
        rows: 1,
      },
      spaceBetween: 24,
    },

    768: {
      slidesPerView: 2,
      updateOnWindowResize: true,
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
window.onresize = function () {
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
};

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
  vacancySlider.update();
  vacancySlider.updateSlides();
  vacancySlider.updateSize();

  /**If you need to destroy this slider */
  // vacancySlider.destroy();
  // vacancySlider = initSlider(".vacancy-slider", vacancySliderOptions);

  let popupButtons = document.querySelectorAll(
    ".vacancy-slider .buttons-wrap .button"
  );
  popupButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      showModal(button);
    });
  });
}

/** Switch Tabs logic*/

const tabs = document.querySelectorAll(".switch_tabs .s-tab");
tabs.forEach((tab) => {
  tab.addEventListener("click", function (e) {
    // let contentWrap = document.querySelector('.vacancy .tab_content');
    // let contentHeight = contentWrap.offsetHeight;
    // console.log(contentHeight)

    let activeTab = e.target;
    let tabId = e.target.getAttribute("data-category");

    // http query
    if (tabId) {
      const swiperWrapper = document.querySelector(
        ".vacancy-slider .swiper-wrapper"
      );
      swiperWrapper.classList.add("loading");
      // contentWrap.style.maxHeight = contentHeight + "px";
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
          setTimeout(() => {
            tabs.forEach((item) => {
              item.classList.remove("active-cat");
            });
            activeTab.classList.add("active-cat");
            e.preventDefault;
            swiperWrapper.classList.remove("loading");
          }, 1000);
          reDrawVacancySlider();
          // contentWrap.style.maxHeight = "auto";
        });

      // http query
    }
  });
});
//------- Modal logic

const pageBody = document.querySelector("body");
const popupOverlay = document.querySelector(".overlay");
const popupLoader = document.getElementById("preloader");

let closeButton = document.querySelectorAll(".close-modal");
let popupButtons = document.querySelectorAll(
  ".vacancy-slider .buttons-wrap .button"
);

closeButton.forEach(function (el) {
  el.addEventListener("click", function () {
    closePopup(this);
  });
});

function closePopup(button) {
  pageBody.classList.remove("modal_open");
  button.closest(".modal").classList.remove("active");
}

popupButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    showModal(button);
  });
});

function showModal(button) {
  let modal;
  if (button.getAttribute("data-popup") == "my-cv") {
    modal = document.getElementById("my-cv-popup");
  } else if (button.getAttribute("data-popup") == "friend-cv") {
    modal = document.getElementById("friend-cv-popup");
  }
  showOverlay();
  modal.classList.add("active");
  // run query
  const id = button.getAttribute("data-post-id");
  fetch(`./data.json`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    // fetch(`/wp-json/wp/v2/posts/${id}`)
    .then((response) => response.text())
    .then((dataText) => {
      const data = JSON.parse(dataText);
      const htmlTitle = data.title.rendered;
      const htmlDescription = data.content.rendered;
      modal.querySelector(".title").innerHTML = htmlTitle;
      modal.querySelector(".description_content").innerHTML = htmlDescription;
      modal.querySelector(".title-value").value = htmlTitle;
    })
    .catch((error) => {
      console.log(error);
    });
}

function showOverlay() {
  pageBody.classList.add("modal_open");
  popupOverlay.classList.add("active");
}
