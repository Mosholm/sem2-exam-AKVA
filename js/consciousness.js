// *** DROPDOWN MENU EVENTS ***

// *** Report Window Size ***//

// for all pages
//drop downs

// for home and product list
// logo change intersection observer

function dropdownAnim() {
  // *** Dropdown Menu for click ***///

  document
    .querySelector(".burger-icon")
    .addEventListener("click", openDropdownMenu);

  function openDropdownMenu() {
    document.querySelector(".burger-dropdown").classList.toggle("menu-dropped");
    document
      .querySelector(".category-options2")
      .classList.remove("category-clicked");
    document
      .querySelector(".category-options1")
      .classList.remove("category-clicked");
  }

  document
    .querySelector(".dropdown-category1")
    .addEventListener("click", category1Clicked);
  document
    .querySelector(".dropdown-category2")
    .addEventListener("click", category2Clicked);

  function category1Clicked() {
    document
      .querySelector(".expand-options2")
      .classList.remove("arrow-rotated");
    document
      .querySelector(".category-options2")
      .classList.remove("category-clicked");
    document
      .querySelector(".category-options1")
      .classList.toggle("category-clicked");
    document
      .querySelector(".expand-options1")
      .classList.toggle("arrow-rotated");
  }

  function category2Clicked() {
    document
      .querySelector(".expand-options1")
      .classList.remove("arrow-rotated");
    document
      .querySelector(".category-options1")
      .classList.remove("category-clicked");
    document
      .querySelector(".category-options2")
      .classList.toggle("category-clicked");
    document
      .querySelector(".expand-options2")
      .classList.toggle("arrow-rotated");
  }
}

function logoChangeSize() {
  let htmlElem = document.querySelector("html");
  let windowWidth = htmlElem.clientWidth;

  window.onresize = reportWindowSize;
  const widthThreshold = 1100;

  function reportWindowSize() {
    windowWidth = htmlElem.clientWidth;
    // console.log(windowWidth);
    if (windowWidth < widthThreshold) {
      document
        .querySelector(".header-logo img")
        .classList.remove("logo-current");
      document
        .querySelector(".burger-dropdown")
        .classList.remove("menu-dropped");
    } else if (windowWidth >= widthThreshold && heroInPosition == true) {
      document.querySelector(".header-logo img").classList.add("logo-current");
    } else if (windowWidth >= widthThreshold && heroInPosition == false) {
      document
        .querySelector(".header-logo img")
        .classList.remove("logo-current");
    }
  }

  // *** Dropdown Menu Functionalities ***///

  const items = document.querySelectorAll(".activate-dropdown");
  let heroInPosition = true;

  items.forEach((item) => {
    if (windowWidth >= widthThreshold) {
      item.addEventListener("mouseenter", expandLogo);
      item.addEventListener("mouseleave", backInPosition);
    }
  });

  function expandLogo() {
    // console.log("mouseenter");
    if (windowWidth >= widthThreshold) {
      document
        .querySelector(".header-logo img")
        .classList.remove("logo-current");
    }
  }

  function backInPosition() {
    // console.log("mouseleave");
    if (windowWidth >= widthThreshold) {
      if (heroInPosition == true) {
        document
          .querySelector(".header-logo img")
          .classList.add("logo-current");
      }
    }
  }

  const heroImg = document.querySelector("#element-observer");

  function callbackFunction(entry) {
    // console.log(entry[0].isIntersecting);
    if (windowWidth >= widthThreshold) {
      if (entry[0].isIntersecting == true) {
        document
          .querySelector(".header-logo img")
          .classList.add("logo-current");
        heroInPosition = true;
      } else if (entry[0].isIntersecting == false) {
        document
          .querySelector(".header-logo img")
          .classList.remove("logo-current");
        heroInPosition = false;
      }
    }
  }

  const observer = new IntersectionObserver(callbackFunction, {
    threshold: 1,
    rootMargin: "-90px 0px 90% 0px",
  });

  observer.observe(heroImg);
}

dropdownAnim();
logoChangeSize();

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
