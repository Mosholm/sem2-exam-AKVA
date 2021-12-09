// *** DROPDOWN MENU EVENTS ***

// *** Report Window Size ***//

let htmlElem = document.querySelector("html");
// console.log(htmlElem.clientWidth);
let windowWidth = htmlElem.clientWidth;

window.onresize = reportWindowSize;

function reportWindowSize() {
    windowWidth = htmlElem.clientWidth;
    // console.log(windowWidth);
    if (windowWidth < 1000) {
        document.querySelector(".header-logo img").classList.remove("logo-current");
    } else if (windowWidth >= 1000 && heroInPosition == true) {
        document.querySelector(".header-logo img").classList.add("logo-current");
    } else if (windowWidth >= 1000 && heroInPosition == false){
        document.querySelector(".header-logo img").classList.remove("logo-current");
    }
}

// *** Dropdown Menu Functionalities ***///

const items = document.querySelectorAll(".activate-dropdown");
let heroInPosition = true;

items.forEach(item => {
    if (windowWidth >= 1000) {
        item.addEventListener("mouseenter", expandLogo);
        item.addEventListener("mouseleave", backInPosition);
    }
});

const heroImg = document.querySelector("#hero-img img");

function callbackFunction(entry) {
    console.log(entry[0].isIntersecting);
    if (windowWidth >= 1000) {
        if (entry[0].isIntersecting == true) {
            document.querySelector(".header-logo img").classList.add("logo-current");
            heroInPosition = true;
        } else if (entry[0].isIntersecting == false) {
            document.querySelector(".header-logo img").classList.remove("logo-current");
            heroInPosition = false;
        }
    }
};

const observer = new IntersectionObserver(callbackFunction, {
    threshold: 1,
    rootMargin: "-90px 0px 80% 0px"
});

observer.observe(heroImg);

function expandLogo() {
    // console.log("mouseenter");
    if (windowWidth >= 1000) {
        document.querySelector(".header-logo img").classList.remove("logo-current");
    }
}

function backInPosition() {
    // console.log("mouseleave");
    if (windowWidth >= 1000) {
        if (heroInPosition == true) {
            document.querySelector(".header-logo img").classList.add("logo-current");
        }
    }
}