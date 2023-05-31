const menuButton = document.getElementById("toggle_menu");
const siteBody = document.querySelector("body");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", () => {
  showMenu();
});

function showMenu() {
  siteBody.classList.toggle("modal_open");
  menu.classList.toggle("active");
  menuButton.classList.toggle("active");
}

// Menu scroll
const smoothScroll = function (targetEl, duration) {
  const headerElHeight =
    document.querySelector(".main_header").clientHeight + 24;
  let target = document.querySelector(targetEl);
  let targetPosition = target.getBoundingClientRect().top - headerElHeight;
  let startPosition = window.pageYOffset;
  let startTime = null;

  const ease = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const animation = function (currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, targetPosition, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };
  requestAnimationFrame(animation);
};

const scrollTo = function () {
  const links = document.querySelectorAll(".scroll-to");
  links.forEach((item) => {
    item.addEventListener("click", function () {
      siteBody.classList.remove("modal_open");
      menu.classList.remove("active");
      menuButton.classList.remove("active");
      const currentTarget = this.getAttribute("href");
      smoothScroll(currentTarget, 800);
    });
  });
};

scrollTo();
