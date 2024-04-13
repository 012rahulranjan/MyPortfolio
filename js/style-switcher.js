// Style switcher toggle button
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

// Hide style switcher on scroll
window.addEventListener("scroll", () => {
  // Check if style switcher is open, and if so, close it on scroll
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});

// Theme color switcher
const alternateStyles = document.querySelectorAll(".alternate-style");

// Function to set the active style based on color
function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

// Day and Night theme switcher
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  // Toggle between sun and moon icons
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  // Toggle dark mode on the body
  document.body.classList.toggle("dark");
});

// Set initial icon based on the body class on page load
window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});
