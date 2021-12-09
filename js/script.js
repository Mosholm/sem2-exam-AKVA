// *** DROPDOWN MENU EVENTS ***

const items = document.querySelectorAll(".activate-dropdown");
let heroInPosition = true;

items.forEach((item) => {
  item.addEventListener("mouseenter", expandLogo);
  item.addEventListener("mouseleave", backInPosition);
});

const heroImg = document.querySelector("#hero-img img");

const callbackFunction = function (entry) {
  console.log(entry[0].isIntersecting);
  if (entry[0].isIntersecting == true) {
    document.querySelector(".header-logo img").classList.remove("logo-current");
    heroInPosition = true;
  } else if (entry[0].isIntersecting == false) {
    document.querySelector(".header-logo img").classList.add("logo-current");
    heroInPosition = false;
  }
};

const observer = new IntersectionObserver(callbackFunction, {
  threshold: 1,
  rootMargin: "-90px 0px 0px 0px",
});

observer.observe(heroImg);

function expandLogo() {
  console.log("mouseenter");
  document.querySelector(".header-logo img").classList.add("logo-current");
}

function backInPosition() {
  console.log("mouseleave");
  if (heroInPosition == true) {
    document.querySelector(".header-logo img").classList.remove("logo-current");
  }
}

const collections = document.querySelectorAll(".cover-coll");
const link1 = document.querySelector("#col-link1");
const link2 = document.querySelector("#col-link2");

collections[0].addEventListener("mouseenter", () => {
  link1.style.setProperty("--default-line-width", "0");
});

collections[0].addEventListener("mouseleave", () => {
  link1.style.setProperty("--default-line-width", "100%");
});

collections[1].addEventListener("mouseenter", () => {
  link2.style.setProperty("--default-line-width", "0");
});

collections[1].addEventListener("mouseleave", () => {
  link2.style.setProperty("--default-line-width", "100%");
});
