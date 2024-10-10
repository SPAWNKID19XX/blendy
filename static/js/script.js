const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
  burger.classList.toggle("toggle");

  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.3
      }s`;
    }
  });
});

// Close mobile menu when clicking outside
document.addEventListener("click", (event) => {
  const isClickInsideNav = nav.contains(event.target);
  const isClickOnBurger = burger.contains(event.target);

  if (
    !isClickInsideNav &&
    !isClickOnBurger &&
    nav.classList.contains("nav-active")
  ) {
    nav.classList.remove("nav-active");
    burger.classList.remove("toggle");

    navLinks.forEach((link) => {
      link.style.animation = "";
    });
  }
});

// Scroll to hide/show navbar
let lastScrollTop = 0;
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top = `-${navbar.offsetHeight}px`;
  } else {
    navbar.style.top = "0";
  }

  lastScrollTop = scrollTop;
});
