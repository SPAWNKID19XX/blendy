/*const burger = document.querySelector(".burger");
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
*/

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

// Toggle the menu when clicking the burger
burger.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
  burger.classList.toggle('toggle');

  // Apply animation to each link again when opening the menu
  navLinks.forEach((link, index) => {
    if (nav.classList.contains('nav-active')) {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    } else {
      link.style.animation = ''; // Remove animation when the menu is closed
    }
  });
});

// Close menu when a link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('nav-active');
    burger.classList.remove('toggle');

    // Remove animations when the menu closes after clicking a link
    navLinks.forEach(link => {
      link.style.animation = '';
    });
  });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (event) => {
  const isClickInsideNav = nav.contains(event.target);
  const isClickOnBurger = burger.contains(event.target);
  
  if (!isClickInsideNav && !isClickOnBurger && nav.classList.contains('nav-active')) {
    nav.classList.remove('nav-active');
    burger.classList.remove('toggle');

    navLinks.forEach(link => {
      link.style.animation = ''; // Remove animations when the menu closes
    });
  }
});

// Detect the end of the scrollable content
window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  let maxScroll = document.documentElement.scrollHeight - window.innerHeight;

  if (scrollTop >= maxScroll) {
    // If you're at the bottom of the page, don't hide the navbar
    navbar.style.top = '0';
  } else if (scrollTop > lastScrollTop) {
    // Scroll down
    navbar.style.top = `-${navbar.offsetHeight}px`;
  } else {
    // Scroll up
    navbar.style.top = '0';
  }

  lastScrollTop = scrollTop;
});