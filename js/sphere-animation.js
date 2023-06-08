let isAnimating = false;
const desktopSphereBox = document.querySelector('#sphereDesktop');
const mobileSphareBox = document.querySelector("#sphereMobile");

function desktopSphereAnimation() {
  document.removeEventListener("scroll", mobileAnimation);
  document.addEventListener("scroll", desktopAnimation);
}

function desktopAnimation() {
  const startPosition = document.getElementById("scroll-first-position").getBoundingClientRect().top + window.scrollY;
  mobileSphareBox.style.display = "none";
  desktopSphereBox.style.display = "block";
  // let scrollTop = window.pageYOffset;

  if (!isAnimating) {
    if (window.scrollY >= startPosition) {
    
    } else if (window.scrollY <= 100) {
     
    }
  }

  // if (startPosition > scrollTop) {
  //   // sphere top state
  //   desktopSphereBox.classList.add('top-state');
  //   desktopSphereBox.classList.remove('bottom-state');
  // } else {
  //   // sphere bottom state
  //   desktopSphereBox.classList.add('bottom-state');
  //   desktopSphereBox.classList.remove('top-state');
  // }
}

function mobileSphereAnimation() {
  document.removeEventListener("scroll", desktopAnimation);
  document.addEventListener("scroll", mobileAnimation);
}

function mobileAnimation() {
  mobileSphareBox.style.display = "block";
  desktopSphereBox.style.display = "none";
  const opasityPosition = document.getElementById("scroll-first-position").getBoundingClientRect().top + window.scrollY;
  const endScroll =
    document
      .getElementById("mob-end-animation-scroll")
      .getBoundingClientRect().top +
    window.scrollY -
    150;
  let scrollTop = window.pageYOffset;
  if (scrollTop >= opasityPosition) {
    mobileSphareBox.querySelector('.sphere').style.opacity = "0.2";
  } else {
    mobileSphareBox.querySelector('.sphere').style.opacity = "1";
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
