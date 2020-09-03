const menu = document.querySelector(".menu");
const nav = document.querySelector(".header");

menu.addEventListener("click", () => {
  if (!nav.classList.contains("opened")) {
    nav.classList.add("opened");
  } else {
    nav.classList.remove("opened");
  }
});
