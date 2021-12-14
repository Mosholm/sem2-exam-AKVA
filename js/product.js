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
