const preloader = document.getElementById("page-loader");

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const siteBody = document.querySelector("body");
    siteBody.classList.remove("loading");
    preloader.classList.remove("active");
  }, 1000);
});
