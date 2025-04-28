let sliderIndex = 0;
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

document.querySelectorAll(".slider-wrapper").forEach((wrapper) => {
  let currentSlide = 0;

  const slides = wrapper.querySelectorAll(".slider img");
  const dots = wrapper.querySelectorAll(".slider-nav a");
  const slideTexts = wrapper.querySelectorAll(".slide-text");
  const prevBtn = wrapper.querySelector(".prev");
  const nextBtn = wrapper.querySelector(".next");

  function showSlide(index) {
    currentSlide = index;

    // Wrap around
    if (currentSlide < 0) currentSlide = slides.length - 1;
    if (currentSlide >= slides.length) currentSlide = 0;

    // Fade in and out animation

    slides.forEach((slide) => (slide.style.display = "none"));
    slides[currentSlide].style.display = "block";

    //
    slideTexts.forEach((text) => {
      text.style.opacity = "0";
      text.style.pointerEvents = "none";
    });

    slideTexts[currentSlide].style.opacity = "1";
    slideTexts[currentSlide].style.pointerEvents = "auto";

    dots.forEach((dot) => dot.classList.remove("active-dot"));
    dots[currentSlide].classList.add("active-dot");
  }

  function plusSlides(n) {
    showSlide(currentSlide + n);
  }

  prevBtn.addEventListener("click", () => plusSlides(-1));
  nextBtn.addEventListener("click", () => plusSlides(1));
  dots.forEach((dot, i) => dot.addEventListener("click", () => showSlide(i)));

  // Initialize
  showSlide(0);
});
