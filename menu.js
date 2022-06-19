const icon = document.querySelector(".nav__icon");
const menu = document.querySelector(".nav__menu");


icon.addEventListener('click',() =>{
    icon.classList.toggle("active");
    menu.classList.toggle("active");
})


document.querySelectorAll(".nav__link").forEach(n => n.addEventListener("click", () => {
    icon.classList.remove("active");
    menu.classList.remove("active");
}));