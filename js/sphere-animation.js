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
let rotation = 0;

let scrollArea = document.querySelector(".scroll-area").offsetHeight;

window.addEventListener("resize", () => {
  getPageSiaze();
});

window.addEventListener("load", () => {
  getPageSiaze();
});

function getPageSiaze() {
  const pageWidth = window.innerWidth;
  const screenHeight = screen.height;
  if (pageWidth <= 768) {
    mobileSphereAnimation();
  }

  if (pageWidth > 1200 && screenHeight > 864) {
    animateSphere(sphereDeskPosition);
  }

  if (pageWidth > 1200 && screenHeight <= 864) {
    animateSphere(sphereDeskPositionH864);
  }

  if (pageWidth <= 1200 && pageWidth >= 1139) {
    animateSphere(sphereTabletPosition);
  }

  if (pageWidth <= 979 && pageWidth >= 767) {
    animateSphere(sphereW979);
  }
}

// Sphere position params for screen size
sphereDeskPosition = {
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

sphereDeskPositionH864 = {
  start: [
    {
      width: "574",
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

sphereTabletPosition = {
  start: [
    {
      width: "674",
      right: "60",
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

sphereW979 = {
  start: [
    {
      width: "497",
      right: "-105",
      rotation: "rotate(0deg)",
      opacity: "1",
    },
  ],

  second: [
    {
      width: "748",
      right: "-150",
      rotation: "rotate(-90deg)",
      opacity: "1",
    },
  ],

  end: [
    {
      width: "414",
      right: "80",
      rotation: "rotate(-150deg)",
      opacity: "0.2",
    },
  ],
};

function mobileSphereAnimation() {
  window.addEventListener("scroll", function () {
    const endScroll =
      document
        .getElementById("mob-end-animation-scroll")
        .getBoundingClientRect().top +
      window.scrollY -
      100;
    let scrollTop = window.pageYOffset || window.scrollTop;

    if (scrollTop >= endScroll) {
      return;
    } else {
      sphareContainer.style.top = scrollTop + 84 + "px";
      sphere.style.transform = "rotate(" + scrollTop / 4 + "deg)";
    }
  });
}

function animationStartPosition(elContainer, el, position, params) {
  elContainer.style.width = params.start[0].width + "px";
  elContainer.style.top = position + "px";
  elContainer.style.right = params.start[0].right + "px";
  el.style.transform = params.start[0].rotation;
  el.style.opacity = params.start[0].opacity;
}

function animationSecondPosition(elContainer, el, position, params) {
  elContainer.style.width = params.second[0].width + "px";
  elContainer.style.top = position + "px";
  elContainer.style.right = params.second[0].right + "px";
  el.style.transform = params.second[0].rotation;
  el.style.opacity = params.second[0].opacity;
}

function animationEndPosition(elContainer, el, position, params) {
  elContainer.style.width = params.end[0].width + "px";
  elContainer.style.top = position * 1.6 + "px";
  elContainer.style.right = params.end[0].right + "%";
  el.style.transform = params.end[0].rotation;
  el.style.opacity = params.end[0].opacity;
}

function animateSphere(params) {
  document.addEventListener("scroll", (e) => {
    let currentScroll =
      document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value

    if (currentScroll >= startPosition && currentScroll < secondPosition) {
      animationSecondPosition(sphareContainer, sphere, startPosition, params);
    }

    if (currentScroll >= secondPosition) {
      animationEndPosition(sphareContainer, sphere, secondPosition, params);
    }

    if (currentScroll <= startPosition) {
      animationStartPosition(sphareContainer, sphere, 84, params);
    }
  });
}
