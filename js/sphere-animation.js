const sphareContainer = document.querySelector(".sphere-box");
const sphere = document.getElementById("sphere");
const startPosition =
  document.getElementById("scroll-first-position").getBoundingClientRect().top +
  window.scrollY;
const secondPosition =
  document.getElementById("scroll-second-position").getBoundingClientRect()
    .top +
  window.scrollY -
  100;
console.log(secondPosition);
let rotation = 0;

let scrollArea = document.querySelector(".scroll-area").offsetHeight;

function scrollDirection() {}

function getPageWidth() {
  const pageWidth = window.innerWidth;
  if (pageWidth > 575) {
    animateSphere();
  } else {
    mobileSphereAnimation();
  }
}

function animationStartPosition(elContainer, el, position) {
  elContainer.style.width = "674px";
  elContainer.style.height = "674px";
  elContainer.style.top = position + "px";
  elContainer.style.right = "100px";
  el.style.transform = "rotate(0deg)";
  el.style.opacity = "1";
}

function animationSecondPosition(elContainer, el, position) {
  elContainer.style.width = "848px";
  elContainer.style.height = "848px";
  elContainer.style.top = position * 1.5 + "px";
  elContainer.style.right = "-250px";
  el.style.transform = "rotate(-90deg)";
  el.style.opacity = "1";
}

function animationEndPosition(elContainer, el, position) {
  elContainer.style.width = "514px";
  elContainer.style.height = "514px";
  elContainer.style.top = position * 1.6 + "px";
  elContainer.style.right = "80%";
  el.style.transform = "rotate(-100deg)";
  el.style.opacity = "0.2";
}

window.addEventListener("resize", () => {
  getPageWidth();
});

window.addEventListener("load", () => {
  getPageWidth();
  let lastScroll = 0;
});

function animateSphere() {
  document.addEventListener("scroll", (e) => {
    let currentScroll =
      document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value

    if (currentScroll >= startPosition && currentScroll < secondPosition) {
      console.log("go second");
      animationSecondPosition(sphareContainer, sphere, startPosition);
    }

    if (currentScroll >= secondPosition) {
      console.log("go end");
      animationEndPosition(sphareContainer, sphere, secondPosition);
    }

    if (currentScroll <= startPosition) {
      console.log("go");
      animationStartPosition(sphareContainer, sphere, 84);
    }
  });
}

function mobileSphereAnimation() {
  window.addEventListener("scroll", function () {
    var scrollTop = window.pageYOffset || window.scrollTop;
    var scrollPercent = scrollTop / scrollArea || 0;
    // console.log(scrollPercent);
    sphareContainer.style.top = scrollTop + "px";
    rotation = rotation + 1;
    console.log(rotation);
    sphere.style.transform = "rotate(" + scrollTop / 10 + "deg)";
  });
}

// spherePositions = {
//   start: [
//     {
//       width: "674px",
//       height: "674px",
//       rotation: "0deg",
//     },
//   ],

//   second: [
//     {
//       width: "848px",
//       height: "848px",
//       rotation: "90deg",
//     },
//   ],

//   end: [
//     {
//         width: "514px",
//         height: "514px",
//         rotation: "180deg",
//     },
//   ],
// };
