const burger = document.querySelector(".burger");
const xmark = document.querySelector(".xmark");
const menu = document.querySelector(".menu");

const closeMenu = () => {
  menu.classList.remove("show");
  burger.style.display = "block";
  xmark.style.display = "none";
};

if (burger && xmark && menu) {
  burger.addEventListener("click", () => {
    burger.style.display = "none";
    xmark.style.display = "block";
    menu.classList.add("show");
  });

  xmark.addEventListener("click", closeMenu);

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}