document.childNodes[1].children[1].children[0].firstElementChild.textContent =
  "change to upper case";

document.querySelector(".headline").textContent = document
  .querySelector(".headline")
  .textContent.toUpperCase();
