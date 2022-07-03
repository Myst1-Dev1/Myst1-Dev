let menu = document.getElementById("menu-bar");
let navbar = document.querySelector(".navbar");
let close = document.querySelector(".close");

menu.addEventListener("click", () => {
    navbar.classList.add('active');
})

close.addEventListener("click", () => {
    navbar.classList.remove('active');
})
