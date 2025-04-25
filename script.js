let currentSlide = 0;
const slides = document.querySelectorAll(".slider img");
const dots = document.querySelectorAll(".slider-nav a");
const slidesText = document.querySelectorAll(".slide-text");

function plusSlides(n) {
  currentSlide += n;

  // Pressing prev on the first image should loop to the last image
  if (currentSlide < 0) currentSlide = slides.length - 1;

  // Pressing next on the last image should loop to the first image
  if (currentSlide >= slides.length) currentSlide = 0;

  // Trigger scrolling animation
  // slides[currentSlide].scrollIntoView({
  //   behavior: "smooth",
  //   inline: "start",
  //   block: "nearest",
  // });
  // dots[currentSlide];

  // Fade in and out animation
  slides.forEach((slide) => (slide.style.display = "none"));
  slides[currentSlide].style.display = "block";

  // Remove Active dots
  dots.forEach((dot) => dot.classList.remove("active-dot"));
  // Add to current dot
  dots[currentSlide].classList.add("active-dot");

  updateTextVisibility();
}

function updateTextVisibility() {
  slidesText.forEach((slideText, index) => {
    const isActive = index === currentSlide;
    slideText.style.opacity = isActive ? "1" : "0";
    slideText.style.pointerEvents = isActive ? "auto" : "none";
  });
}
