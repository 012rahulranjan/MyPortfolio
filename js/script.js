// Typing Animation
var typed = new Typed(".typing", {
  strings: [
    "",
    "Software Engineer"
    "Frontend Developer",
    "Web Developer",
    "Analyst",
    "Programmer",
  ],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

// Navigation functionality
const nav = document.querySelector(".nav"),
  navlist = nav.querySelectorAll("li"),
  totalNavList = navlist.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;

// Event listener for navigation clicks
for (let i = 0; i < totalNavList; i++) {
  const a = navlist[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSection();
    for (let i = 0; i < totalSection; i++) {
      allSection[i].classList.remove("back-section");
    }
    for (let j = 0; j < totalNavList; j++) {
      if (navlist[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
        allSection[j].classList.add("back-section");
      }
      navlist[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  })
}

// Function to remove the "back-section" class from all sections
function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}

// Function to add the "back-section" class to a specific section
function addBackSection(num) {
  allSection[num].classList.add("back-section");
}

// Function to show a specific section and update the active navigation link
function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

// Function to update the active navigation link
function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navlist[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (target === navlist[i].querySelector("a").getAttribute("href").split("#")[1]) {
      navlist[i].querySelector("a").classList.add("active");
    }
  }
}

// Event listener for the "hire-me" button
document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});

// Navigation toggle button functionality
const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

// Function to toggle the open class on the aside and sections
function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}
