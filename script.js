const burger = document.querySelector(".burger");
const xmark = document.querySelector(".xmark");
const menu = document.querySelector(".menu");

burger.addEventListener("click", ()=>{
    burger.style.display = "none";
    xmark.style.display = "block";
    menu.classList.add("show")
})