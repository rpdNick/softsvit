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
  console.log(directionUp)
  return directionUp;
}

// function throttle(fn, wait) {
//   let time = Date.now();
//   return function() {
//     if ((time + wait - Date.now()) < 0) {
//       fn();
//       time = Date.now();
//     }
//   }
// }

window.addEventListener("scroll", handleScroll);
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
    { transform: "translate(0) scale(1)", opacity: 1 },
    { transform: "translate(170px,600px) scale(1.4)", opacity: 0.7 },
    { transform: "translate(-800px,800px) scale(0.75)", opacity: 0.5 },
  ],
  {
    fill: "forwards",
    duration: 1600,
    easing: "cubic-bezier(0.9,0.9,0.5,0.5)",
  }
);
earth.pause();
let rotation = document
  .getElementById("sphereDesktopImg")
  .animate(
    [
      { transform: "rotate(0)" },
      { transform: "rotate(360deg)" },
      { transform: "rotate(720deg)" },
    ],
    {
      fill: "forwards",
      iterations: Infinity,
      duration: 4000,
    }
  );
rotation.pause();
let onTop;
function handleScroll() {
  
  // throttle(scrollDirection, 1000);
  let scrollUp = scrollDirection();
  let start = document
    .querySelector("[data-animation]")
    .getAttribute("data-animation");
  let onScreen = isElementOnScreen("trigger");
  let earthOnScreen = isElementOnScreen("sphereDesktop");
  let bottomTriggerOnScreen = isElementOnScreen("bottom-trigger");

  if (!onScreen && !earthOnScreen && onTop && start == "false" && !scrollUp) {
    rotation.play();
    earth.play();
    onTop = false;
    document
      .querySelector("[data-animation]")
      .setAttribute("data-animation", true);
  } else if (!onScreen && !earthOnScreen && onTop && !scrollUp) {
    rotation.play();
    earth.reverse();
    onTop = false;
  } else if (!onScreen && !earthOnScreen && !onTop && bottomTriggerOnScreen && scrollUp) {
    rotation.play();
    earth.reverse();
    onTop = true;
  }
}

window.onload = function () {
  document
    .getElementById("trigger")
    .setAttribute("data-ontop", isElementOnScreen("trigger"));
  onTop = document.getElementById("trigger").getAttribute("data-ontop");

  document
    .getElementById("bottom-trigger")
    .setAttribute("data-onbottom", isElementOnScreen("trigger"));
};
earth.addEventListener("finish", function () {
  rotation.pause();
});
