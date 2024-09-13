// Select the slider wrapper and the image sliders
const sliderWrapper = document.querySelector(".slider-wrapper");
const imageSliders = document.querySelectorAll(".image-slider");

// Set the current slide index
let currentSlide = 0;

// Add event listeners to the arrow icons
document.querySelectorAll(".icons img").forEach((icon) => {
  icon.addEventListener("click", (e) => {
    if (e.target.alt === "arrow") {
      // Go to the next slide
      currentSlide = (currentSlide + 1) % imageSliders.length;
    } else if (e.target.alt === "left") {
      // Go to the previous slide
      currentSlide = (currentSlide - 1 + imageSliders.length) % imageSliders.length;
    }
    updateSlider();
  });
});

// Update the slider by hiding all slides and showing the current one
function updateSlider() {
  imageSliders.forEach((slider) => {
    slider.style.display = "none";
  });
  imageSliders[currentSlide].style.display = "block";
}

// Initialize the slider by showing the first slide
updateSlider();