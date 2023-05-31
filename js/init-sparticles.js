window.onload = function () {
    initSparticles();
};

// shape of particles (any of; circle, square, triangle, diamond, line, image) or "random"
function initSparticles() {
    let sparticles = document.querySelector('.sparticles_box');

    window.mySparticles = new Sparticles(sparticles, {
        direction: 0,
        drift: 2,
        maxSize: 10,
        shape: 'square',
        speed: 3,
        color: "#ffffff",
    });
}