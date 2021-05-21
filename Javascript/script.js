// navbar
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-ul');
    const navLinks = document.querySelectorAll('.nav-ul li');

    // toggle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        // hamburger animation
        burger.classList.toggle('toggle');
        // link animation
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
            }
        });
    })
}

navSlide();
// custom cursor
new kursor({
    type: 1,
    color: '#fff'
})

function preload() {
    const preload = document.querySelector("#preload");
    preload.classList.add('preload-finish');
}

setTimeout(preload, 2000)

// scrollout
ScrollOut({
    targets: "#right"
});

ScrollOut({
    targets: "#left"
});