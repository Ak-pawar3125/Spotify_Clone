// Select Elements
const dropdown = document.querySelector(".menu");
const cross = document.querySelector(".dropdown-menu .cross");
const menu_icon = document.querySelector(".small-nav .menu-icon");

// Function to Show Menu
menu_icon.addEventListener("click", () => {
    dropdown.classList.add("active"); // Add active class
});

// Function to Hide Menu
cross.addEventListener("click", () => {
    dropdown.classList.remove("active"); // Remove active class
});
