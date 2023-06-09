const desktopSphereBox = document.querySelector("#sphereDesktop");
const mobileSphareBox = document.querySelector("#sphereMobile");

let currentDesktopAnimationState = 0;

function desktopSphereAnimation() {
  document.removeEventListener("scroll", mobileAnimation);
  document.addEventListener("scroll", desktopAnimation);
}

function desktopAnimation() {
  const startPosition = document.getElementById("scroll-first-position").getBoundingClientRect().top + window.scrollY;

  mobileSphareBox.style.display = "none";
  desktopSphereBox.style.display = "block";

  let timeout;

  window.addEventListener("scroll", function () {
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    var direction = 1; // Направление анимации (1 - вниз, -1 - вверх)

    params = {
      start: [
        {
          scale: "1",
          right: "100",
          transformation: "0",
          opacity: "1",
        },
      ],

      second: [
        {
          scale: "1.3",
          transformationY: "70",
          transformationX: "180",
          rotation: "-100",
          opacity: "1",
        },
      ],

      end: [
        {
          scale: "0.8",
          transformationY: "180",
          transformationX: "-200",
          rotation: "-150",
          opacity: "0.2",
        },
      ],
    };

    if (currentScroll > startPosition) {
      if (currentDesktopAnimationState !== 1 || direction !== 1) {
        desktopSphereBox.style.scale = params.second[0].scale;
        desktopSphereBox.style.transform =
          "translate(" +
          params.second[0].transformationX +
          "px, " +
          params.second[0].transformationY +
          "%) rotate(" +
          params.second[0].rotation +
          "deg)";
        desktopSphereBox.style.opacity = params.second[0].opacity;

        setTimeout(function () {
          desktopSphereBox.style.scale = params.end[0].scale;
          desktopSphereBox.style.transform = "translate(calc(" + params.end[0].transformationX + "%), " + params.end[0].transformationY + "%)";
          desktopSphereBox.style.opacity = params.end[0].opacity;

          currentDesktopAnimationState = 1;

          // animation direction
          direction = -1;
        }, 600);
      }
    } else if (currentScroll < startPosition) {
      if (currentDesktopAnimationState !== 0 || direction !== -1) {
        desktopSphereBox.style.scale = params.start[0].scale;
        desktopSphereBox.style.transform = "translate(" + params.start[0].transformation + "px)";
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
