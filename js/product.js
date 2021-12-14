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

function databaseGet() {
  const urlParams = new URLSearchParams(window.location.search);
  const title = urlParams.get("title");
  const url = `https://gnmmd2ndsemester-6f2a.restdb.io/rest/akva?q={"title":"${title}"}`;

  const options = {
    headers: {
      "x-apikey": "61b64c7672a03f5dae822307",
    },
  };

  console.log(url);

  fetch(url, options)
    .then((response) => response.json())
    .then(dynamicShow);
}

function dynamicShow(p) {
  const temp = document.querySelector("template").content;
  const clone = temp.cloneNode(true);
  console.log(p);

  clone.querySelector("h1").textContent = p[0].title;
  clone.querySelector("p:first-of-type").textContent = p[0].description1;
  clone.querySelector("p:nth-of-type(2)").textContent = p[0].description2;
  clone.querySelector("#product-price").textContent = `${p[0].price} €`;
  clone.querySelector("img:first-of-type").src = p[0].coverImg;

  let sizes = p[0].sizes.split(",");
  console.log(sizes);

  for (let z = 0; z < sizes.length; z++) {
    const sizeOption = document.createElement("option");
    sizeOption.setAttribute("value", "choose");
    sizeOption.textContent = sizes[z];
    clone.querySelector("select").appendChild(sizeOption);
  }

  console.log(p.title);

  document.querySelector("main").appendChild(clone);
}

databaseGet();

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
