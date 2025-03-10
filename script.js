const dropdown = document.querySelector(".menu");
const cross = document.querySelector(".dropdown-menu .cross");
const menu_icon = document.querySelector(".small-nav .menu-icon");

menu_icon.addEventListener("click", () => {
    dropdown.classList.add("active");
});

cross.addEventListener("click", () => {
    dropdown.classList.remove("active");
});
