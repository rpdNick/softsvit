const desktopSphereBox = document.querySelector("#sphereDesktop");
const mobileSphareBox = document.querySelector("#sphereMobile");
let desktopMainScreen = document.querySelector(".main_screen_wrap");
const secondSection = document.querySelector(".about_us");

let currentDesktopAnimationState = 0;

function desktopSphereAnimation() {
  document.removeEventListener("scroll", mobileAnimation);
  document.addEventListener("scroll", desktopAnimation);
}

function desktopAnimation() {
  mobileSphareBox.style.display = "none";
  desktopSphereBox.style.display = "block";
}

function mobileSphereAnimation() {
  document.removeEventListener("scroll", desktopAnimation);
  document.addEventListener("scroll", mobileAnimation);
}

function mobileAnimation() {
  mobileSphareBox.style.display = "block";
  desktopSphereBox.style.display = "none";
  const opasityPosition =
    document.getElementById("scroll-first-position").getBoundingClientRect()
      .top + window.scrollY;
  const endScroll =
    document.getElementById("mob-end-animation-scroll").getBoundingClientRect()
      .top +
    window.scrollY -
    150;
  let scrollTop = window.pageYOffset;
  if (scrollTop >= opasityPosition) {
    mobileSphareBox.querySelector(".sphere").style.opacity = "0.2";
  } else {
    mobileSphareBox.querySelector(".sphere").style.opacity = "1";
  }
  if (scrollTop <= endScroll) {
    mobileSphareBox.style.transform =
      "translateY(" + scrollTop / 5 + "%) rotate(" + scrollTop / 4 + "deg)";
  }
}

function runAnimationSphere() {
  if (window.innerWidth >= 992) {
    desktopSphereAnimation();
  } else {
    mobileSphereAnimation();
  }
}

window.addEventListener("resize", () => {
  runAnimationSphere();
});

window.addEventListener("load", () => {
  runAnimationSphere();
});
