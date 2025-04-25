let currentSlide = 0;
const slides = document.querySelectorAll(".slider img");
const dots = document.querySelectorAll(".slider-nav a");
const slide1Text = document.querySelector(".slide1-text");

function plusSlides(n) {
  console.log(n);
  currentSlide += n;

  // Pressing prev on the first image should loop to the last image
  if (currentSlide < 0) currentSlide = slides.length - 1;

  // Pressing next on the last image should loop to the first image
  if (currentSlide >= slides.length) currentSlide = 0;

  // Trigger scrolling animation
  slides[currentSlide].scrollIntoView({
    behavior: "smooth",
    inline: "start",
    block: "nearest",
  });
  dots[currentSlide];

  // Remove Active dots
  dots.forEach((dot) => dot.classList.remove("active-dot"));

  // Add to current dot
  dots[currentSlide].classList.add("active-dot");
  updateTextVisibility();
}

function updateTextVisibility() {
  if (currentSlide === 0) {
    slide1Text.style.opacity = "1";
    slide1Text.style.pointerEvents = "auto";
  } else {
    slide1Text.style.opacity = "0";
    slide1Text.style.pointerEvents = "none";
  }
}
