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

dropdownAnim();

// buttons stuff
const clearBtn = document.querySelector("#product-page-det div button");
const add = document.querySelector("#add");
const select = document.querySelector("#size-select");

select.addEventListener("change", () => {
  if (select.value === "choose") {
    add.classList.add("inactive");
    clearBtn.classList.add("clear-invisible");
  } else {
    add.classList.remove("inactive");
    clearBtn.classList.remove("clear-invisible");

    clearBtn.addEventListener("click", () => {
      select.value = "choose";
      add.classList.add("inactive");
      clearBtn.classList.add("clear-invisible");
    });
  }
});
