let animateBottom = true;
let animateTop = false;
const desktopSphereBox = document.querySelector("#sphereDesktop");
const mobileSphareBox = document.querySelector("#sphereMobile");
let currentDesktopAnimationState = 0;

function desktopSphereAnimation() {
  document.removeEventListener("scroll", mobileAnimation);
  document.addEventListener("scroll", desktopAnimation);
}

function desktopAnimation() {
  const startPosition =
    document.getElementById("scroll-first-position").getBoundingClientRect()
      .top + window.scrollY;
  const animateToTop =
    document.getElementById("about_us").getBoundingClientRect().top +
    window.scrollY;

  mobileSphareBox.style.display = "none";
  desktopSphereBox.style.display = "block";

  let timeout;

  window.addEventListener("scroll", function () {
    var currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;
    var startPosition = 500; // Начальная позиция, от которой должна начинаться анимация
    var direction = 1; // Направление анимации (1 - вниз, -1 - вверх)

    params = {
      start: [
        {
          width: "674",
          right: "100",
          rotation: "rotate(0deg)",
          opacity: "1",
        },
      ],

      second: [
        {
          width: "848",
          right: "-250",
          rotation: "rotate(-90deg)",
          opacity: "1",
        },
      ],

      end: [
        {
          width: "514",
          right: "80",
          rotation: "rotate(-150deg)",
          opacity: "0.2",
        },
      ],
    };

    if (currentScroll > startPosition) {
      if (currentDesktopAnimationState !== 1 || direction !== 1) {
        desktopSphereBox.style.width = params.second[0].width + "px";
        desktopSphereBox.style.top = startPosition * 1.6 + "px";
        desktopSphereBox.style.right = params.second[0].right + "px";
        desktopSphereBox.style.transform = params.second[0].rotation;
        desktopSphereBox.style.opacity = params.second[0].opacity;

        setTimeout(function () {
          desktopSphereBox.style.width = params.end[0].width + "px";
          desktopSphereBox.style.top = startPosition * 1.7 + "px";
          desktopSphereBox.style.right = params.end[0].right + "%";
          desktopSphereBox.style.transform = params.end[0].rotation;
          desktopSphereBox.style.opacity = params.end[0].opacity;
          currentDesktopAnimationState = 1;

          // animation direction
          direction = -1;
        }, 1000);
      }
    } else if (currentScroll < startPosition) {
      if (currentDesktopAnimationState !== 0 || direction !== -1) {
        desktopSphereBox.style.width = params.start[0].width + "px";
        desktopSphereBox.style.top = 84 + "px";
        desktopSphereBox.style.right = params.start[0].right + "px";
        desktopSphereBox.style.transform = params.start[0].rotation;
        desktopSphereBox.style.opacity = params.start[0].opacity;
        currentDesktopAnimationState = 0;

        // animation direction
        direction = 1;
      }
    }
  });
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
  if (window.innerWidth > 768) {
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
