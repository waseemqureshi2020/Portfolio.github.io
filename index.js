// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");

// hamburger.addEventListener("click", () =>; {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// })

// document.querySelectorAll(".nav-links").forEach(n => n.
// addEventListener("click", () => {
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
// }))

const navMenu = document.querySelector(".navMenu");
const navLink = document.querySelectorAll(".navLink");
const hamburger = document.querySelector(".hamburger");
const closedIcon = document.querySelector(".closedIcon");
const hamburgerIcon = document.querySelector(".hamburgerIcon");

function toggleMenu() {
  if (navMenu.classList.contains("showMenu")) {
    navMenu.classList.remove("showMenu");
    closedIcon.style.display = "none";
    hamburgerIcon.style.display = "block";
  } else {
    navMenu.classList.add("showMenu");
    closedIcon.style.display = "block";
    hamburgerIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

navLink.forEach(function (navLink) {
  navLink.addEventListener("click", toggleMenu);
});
