// 1. Dynamic active navbar switching based on page scrolling position
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        let targetLink = document.querySelector(
          "header nav a[href*=" + id + "]",
        );
        if (targetLink) targetLink.classList.add("active");
      });
    }
  });
};

// =========================================================================
// 2. Click to Slide-Down Functionality for Skills Boxes
// =========================================================================
document.addEventListener("DOMContentLoaded", () => {
  const skillBoxes = document.querySelectorAll(".skill-toggle");

  console.log("Found " + skillBoxes.length + " skill boxes."); // Debug line

  skillBoxes.forEach((box) => {
    box.addEventListener("click", () => {
      console.log("Skill box clicked!"); // Debug line

      // Close any other open boxes first
      skillBoxes.forEach((otherBox) => {
        if (otherBox !== box && otherBox.classList.contains("active-box")) {
          otherBox.classList.remove("active-box");
          otherBox.querySelector(".skill-desc").style.maxHeight = null;
        }
      });

      // Toggle active class on clicked box
      box.classList.toggle("active-box");

      // Explicitly set maxHeight using pixels so CSS transitions can read it flawlessly
      const desc = box.querySelector(".skill-desc");
      if (box.classList.contains("active-box")) {
        desc.style.maxHeight = desc.scrollHeight + "px";
      } else {
        desc.style.maxHeight = null;
      }
    });
  });
});

// =======================================================================
// 3. Multi-Theme Switching Control Logic (Normal, White, Dark)
// =========================================================================
const btnNormal = document.getElementById('btn-normal');
const btnWhite = document.getElementById('btn-white');
const btnDark = document.getElementById('btn-dark');
const allThemeBtns = document.querySelectorAll('.theme-btn');

// Helper to reset body classes and button states
function resetThemeActiveState(activeBtn) {
    document.body.classList.remove('white-mode', 'dark-mode');
    allThemeBtns.forEach(btn => btn.classList.remove('active'));
    activeBtn.classList.add('active');
}

// Normal Theme Mode Click Listener
btnNormal.addEventListener('click', () => {
    resetThemeActiveState(btnNormal);
});

// White Theme Mode Click Listener
btnWhite.addEventListener('click', () => {
    resetThemeActiveState(btnWhite);
    document.body.classList.add('white-mode');
});

// Dark Theme Mode Click Listener
btnDark.addEventListener('click', () => {
    resetThemeActiveState(btnDark);
    document.body.classList.add('dark-mode');
});