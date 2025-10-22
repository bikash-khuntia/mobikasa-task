const humburger_menu = document.querySelector("#hamburger_menu")
const header_nav = document.querySelector("#header_nav")
const icon = humburger_menu.querySelector("i");

humburger_menu.addEventListener("click", ()=> {
    
    header_nav.classList.toggle('active')
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
})