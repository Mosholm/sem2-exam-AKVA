const urlParams = new URLSearchParams(window.location.search);
const url = "https://gnmmd2ndsemester-6f2a.restdb.io/rest/akva";

const options = {
  headers: {
    "x-apikey": "61b64c7672a03f5dae822307",
  },
};

fetch(url, options)
  .then((response) => response.json())
  .then(showList);

function showList(p) {
  p.forEach((e) => {
    const temp = document.querySelector("template").content;
    const clone = temp.cloneNode(true);

    clone.querySelector("a").setAttribute("href", "#");
    clone.querySelector("img").src = e.coverImg;
    clone.querySelector("h3 a").textContent = e.title;
    clone.querySelector(".product-price").textContent = `${e.price} €`;

    document.querySelector("#product-grid").appendChild(clone);
  });
}
