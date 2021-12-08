
// *** DROPDOWN MENU EVENTS ***

const items = document.querySelectorAll(".activate-dropdown");

items.forEach(item => {
    item.addEventListener("mouseenter", expandLogo);
    item.addEventListener("mouseleave", backInPosition);
});

function expandLogo () {
    console.log("mouseenter");
    document.querySelector(".header-logo img").classList.toggle("logo-current");
}

function backInPosition () {
    console.log("mouseleave");
    document.querySelector(".header-logo img").classList.toggle("logo-current");
}