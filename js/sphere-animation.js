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
const topPosition = 84;
let rotation = 0;

function getPageSize() {
  const pageWidth = window.innerWidth;
  const screenHeight = screen.height;

  return pageWidth, screenHeight;
}

console.log(getPageSize());

function mobileSphereAnimation() {
  document.addEventListener("scroll", function () {
    const endScroll =
      document
        .getElementById("mob-end-animation-scroll")
        .getBoundingClientRect().top +
      window.scrollY -
      150;
    let scrollTop = window.pageYOffset;
    if (scrollTop <= endScroll) {
      sphareContainer.style.transform =
        "translateY(" + scrollTop / 5 + "%) rotate(" + scrollTop / 4 + "deg)";
    }
  });
}

window.addEventListener("resize", () => {
  console.log('111');
  getPageSize();
});

window.addEventListener("load", () => {
  getPageSize();
});

// function getPageSiaze() {
//   const pageWidth = window.innerWidth;
//   const screenHeight = screen.height;

//   if (pageWidth > 1200 && screenHeight > 864) {
//     animateSphere(sphereDeskPosition);
//     animationStartPosition(
//       sphareContainer,
//       sphere,
//       topPosition,
//       sphereDeskPosition
//     );
//   } else if (pageWidth > 1200 && screenHeight <= 864) {
//     animateSphere(sphereDeskPositionH864);
//     animationStartPosition(
//       sphareContainer,
//       sphere,
//       topPosition,
//       sphereDeskPositionH864
//     );
//   } else if (pageWidth <= 1200 && pageWidth >= 1139) {
//     animateSphere(sphereTabletPosition);
//     animationStartPosition(
//       sphareContainer,
//       sphere,
//       topPosition,
//       sphereTabletPosition
//     );
//   } else if (pageWidth <= 979 && pageWidth >= 769) {
//     animateSphere(sphereW979);
//     animationStartPosition(sphareContainer, sphere, topPosition, sphereW979);
//   } else if (pageWidth <= 768) {
//     mobileSphereAnimation();
//   }
// }

// // Sphere position params for screen size
// sphereDeskPosition = {
//   start: [
//     {
//       width: "674",
//       right: "100",
//       rotation: "rotate(0deg)",
//       opacity: "1",
//     },
//   ],

//   second: [
//     {
//       width: "848",
//       right: "-250",
//       rotation: "rotate(-90deg)",
//       opacity: "1",
//     },
//   ],

//   end: [
//     {
//       width: "514",
//       right: "80",
//       rotation: "rotate(-150deg)",
//       opacity: "0.2",
//     },
//   ],
// };

// sphereTabletPosition = {
//   start: [
//     {
//       width: "574",
//       right: "60",
//       rotation: "rotate(0deg)",
//       opacity: "1",
//     },
//   ],

//   second: [
//     {
//       width: "748",
//       right: "-250",
//       rotation: "rotate(-90deg)",
//       opacity: "1",
//     },
//   ],

//   end: [
//     {
//       width: "514",
//       right: "80",
//       rotation: "rotate(-150deg)",
//       opacity: "0.2",
//     },
//   ],
// };

// sphereDeskPositionH864 = {
//   start: [
//     {
//       width: "574",
//       right: "100",
//       rotation: "rotate(0deg)",
//       opacity: "1",
//     },
//   ],

//   second: [
//     {
//       width: "748",
//       right: "-250",
//       rotation: "rotate(-90deg)",
//       opacity: "1",
//     },
//   ],

//   end: [
//     {
//       width: "514",
//       right: "80",
//       rotation: "rotate(-150deg)",
//       opacity: "0.2",
//     },
//   ],
// };

// sphereW979 = {
//   start: [
//     {
//       width: "497",
//       right: "-105",
//       rotation: "rotate(0deg)",
//       opacity: "1",
//     },
//   ],

//   second: [
//     {
//       width: "648",
//       right: "-150",
//       rotation: "rotate(-90deg)",
//       opacity: "1",
//     },
//   ],

//   end: [
//     {
//       width: "414",
//       right: "80",
//       rotation: "rotate(-150deg)",
//       opacity: "0.2",
//     },
//   ],
// };

// getPageSiaze();

// function animationStartPosition(elContainer, el, position, params) {
//   elContainer.style.width = params.start[0].width + "px";
//   elContainer.style.top = position + "px";
//   elContainer.style.right = params.start[0].right + "px";
//   el.style.transform = params.start[0].rotation;
//   el.style.opacity = params.start[0].opacity;
// }

// function animationSecondPosition(elContainer, el, position, params) {
//   elContainer.style.width = params.second[0].width + "px";
//   elContainer.style.top = position + "px";
//   elContainer.style.right = params.second[0].right + "px";
//   el.style.transform = params.second[0].rotation;
//   el.style.opacity = params.second[0].opacity;
// }

// function animationEndPosition(elContainer, el, position, params) {
//   elContainer.style.width = params.end[0].width + "px";
//   elContainer.style.top = position * 1.6 + "px";
//   elContainer.style.right = params.end[0].right + "%";
//   el.style.transform = params.end[0].rotation;
//   el.style.opacity = params.end[0].opacity;
// }

// function animateSphere(params) {
//   document.addEventListener("scroll", () => {
//     let currentScroll =
//       document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value

//     if (currentScroll >= startPosition && currentScroll < secondPosition) {
//       animationSecondPosition(sphareContainer, sphere, startPosition, params);
//     }

//     if (currentScroll >= secondPosition) {
//       animationEndPosition(sphareContainer, sphere, secondPosition, params);
//     }

//     if (currentScroll <= startPosition) {
//       animationStartPosition(sphareContainer, sphere, 84, params);
//     }
//   });
// }
