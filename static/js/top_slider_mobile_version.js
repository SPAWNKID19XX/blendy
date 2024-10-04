//script for the slider

const sliderContainer = document.querySelector(".slider-container");
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function updateSlider(instant = false) {
  const slideWidth = slides[0].offsetWidth;
  const offset =
    slideWidth * currentIndex - (sliderContainer.offsetWidth - slideWidth) / 2;

  if (instant) {
    sliderContainer.style.transition = "none";
  } else {
    sliderContainer.style.transition = "transform 0.5s ease";
  }

  sliderContainer.style.transform = `translateX(-${offset}px)`;

  slides.forEach((slide, index) => {
    slide.classList.toggle("active", index === currentIndex);
  });

  if (instant) {
    setTimeout(() => {
      sliderContainer.style.transition = "transform 0.5s ease";
    }, 50);
  }
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    // If we've gone past the last slide, reset to the first
    currentIndex = 0;
    updateSlider(true); // Use instant transition
  } else {
    updateSlider();
  }
}

// Automatic sliding
setInterval(nextSlide, 3000); // Change slide every 3 seconds

window.addEventListener("resize", () => updateSlider(true));
updateSlider(true); // Initial setup
