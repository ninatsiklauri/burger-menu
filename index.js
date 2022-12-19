const navBar = document.querySelector(".nav-links");
const burger = document.querySelector(".burger")
const navLink = document.querySelectorAll(".nav-links li")

burger.addEventListener("click", () => {
    navBar.classList.toggle("nav-active")
    navLink.forEach((link, index) => {
        link.style.animation = `navLink 0.5s ease forwards ${index / 5}s`
    });
    burger.classList.toggle("click")
});

