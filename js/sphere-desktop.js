let scrollStartValue = 0;

function scrollDirection() {

  scrollCurrentValue = window.scrollY;
  let directionUp;

  if (scrollStartValue - scrollCurrentValue < 0) {
    directionUp = false;
  } else if (scrollStartValue - scrollCurrentValue > 0) {
    directionUp = true;
  }

  scrollStartValue = scrollCurrentValue;
  return directionUp;
}

window.addEventListener("scroll", animeteEarth);
function isElementOnScreen(elementId) {
  var element = document.getElementById(elementId);
  if (!element) {
    return false; // елемент не знайдено
  }
  var trigger = element.getAttribute("data-animation-trigger");
  if (!trigger) {
    return false; // атрибут data-animation-trigger не встановлено
  }
  var rect = element.getBoundingClientRect();
  var windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  return rect.top <= windowHeight && rect.bottom >= 0;
}
let earth = document.getElementById("sphereDesktop").animate(
  [
    { transform: "translate3D(0,0,0) scale(1) rotate(0)", opacity: 1 },
    { transform: "translate3D(170px,600px, 0) scale(1.3) rotate(180deg)", opacity: 0.7 },
    { transform: "translate3D(-800px,800px, 0) scale(0.7) rotate(360deg)", opacity: 0.5 },
  ],
  {
    fill: "forwards",
    duration: 2000,
    easing: 'ease-out',
    // easing: "cubic-bezier(0.9,0.9,0.5,0.5)",
  }
);
earth.pause();

let onTop;
function handleScroll() {
  
  let scrollUp = scrollDirection();
  let start = document
    .querySelector("[data-animation]")
    .getAttribute("data-animation");
  let onScreen = isElementOnScreen("trigger");
  let earthOnScreen = isElementOnScreen("sphereDesktop");
  let bottomTriggerOnScreen = isElementOnScreen("bottom-trigger");

  if (!onScreen && !earthOnScreen && onTop && start == "false" && !scrollUp) {
    earth.play();
    onTop = false;
    document
      .querySelector("[data-animation]")
      .setAttribute("data-animation", true);
  } else if (!onScreen && !earthOnScreen && onTop && !scrollUp) {
    earth.reverse();
    onTop = false;
  } else if (!onScreen && !earthOnScreen && !onTop && bottomTriggerOnScreen && scrollUp) {
    earth.reverse();
    onTop = true;
  } else if (!onTop && window.scrollY == 0) {
    earth.reverse();
    onTop = true;
  }
}

function animeteEarth() {
  window.requestAnimationFrame(handleScroll);
}

window.onload = function () {
  document
    .getElementById("trigger")
    .setAttribute("data-ontop", isElementOnScreen("trigger"));
  onTop = document.getElementById("trigger").getAttribute("data-ontop");

  document
    .getElementById("bottom-trigger")
    .setAttribute("data-onbottom", isElementOnScreen("trigger"));
    animeteEarth();
};

earth.addEventListener("finish", function () {
  earth.pause();
});
