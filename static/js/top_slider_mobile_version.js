const sliderWrapper = document.querySelector('.slider-wrapper');
const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

// Control for next bottle visibility (0 to 0.5, where 0.5 shows half of the next bottle)
const nextBottleVisibility = 0.2;

function updateSlider(instant = false) {
    if (instant) {
        sliderContainer.style.transition = 'none';
    } else {
        sliderContainer.style.transition = 'transform 0.5s ease';
    }
    
    const slideWidth = slides[0].offsetWidth;
    const offset = -currentIndex * slideWidth + (slideWidth * nextBottleVisibility);
    sliderContainer.style.transform = `translateX(${offset}px)`;

    slides.forEach((slide, index) => {
        let scale, opacity;
        
        if (index === currentIndex) {
            scale = 1;
            opacity = 1;
        } else if (index === (currentIndex + 1) % slides.length) {
            scale = 0.9;
            opacity = 0.8;
        } else {
            scale = 0.8;
            opacity = 0.5;
        }
        
        slide.style.transform = `scale(${scale})`;
        slide.style.opacity = opacity;
    });

    if (instant) {
        sliderContainer.offsetHeight; // Trigger reflow
    }
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
}

updateSlider(true);

function revealSlider() {
    sliderWrapper.classList.add('loaded');
}

setTimeout(revealSlider, 100);

// Auto-advance every 3 seconds
setInterval(nextSlide, 3000);

window.addEventListener('resize', () => {
    updateSlider(true);
    sliderWrapper.classList.remove('loaded');
    setTimeout(revealSlider, 100);
});

window.addEventListener('load', () => {
    updateSlider(true);
    sliderWrapper.classList.remove('loaded');
    setTimeout(revealSlider, 100);
});






// Add touch and drag functionality
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID = 0;

sliderContainer.addEventListener('mousedown', dragStart);
sliderContainer.addEventListener('touchstart', dragStart);
sliderContainer.addEventListener('mouseup', dragEnd);
sliderContainer.addEventListener('touchend', dragEnd);
sliderContainer.addEventListener('mousemove', drag);
sliderContainer.addEventListener('touchmove', drag);

function dragStart(event) {
    if (event.type === 'touchstart') {
        startPos = event.touches[0].clientX;
    } else {
        startPos = event.clientX;
    }
    isDragging = true;
    animationID = requestAnimationFrame(animation);
}

function drag(event) {
    if (isDragging) {
        let currentPosition;
        if (event.type === 'touchmove') {
            currentPosition = event.touches[0].clientX;
        } else {
            currentPosition = event.clientX;
        }
        currentTranslate = prevTranslate + currentPosition - startPos;
    }
}

function dragEnd() {
    isDragging = false;
    cancelAnimationFrame(animationID);
    const movedBy = currentTranslate - prevTranslate;
    if (movedBy < -100 && currentIndex < slides.length - 1) nextSlide();
    if (movedBy > 100 && currentIndex > 0) prevSlide();
    updateSlider();
}

function animation() {
    setSliderPosition();
    if (isDragging) requestAnimationFrame(animation);
}

function setSliderPosition() {
    sliderContainer.style.transform = `translateX(${currentTranslate}px)`;
}