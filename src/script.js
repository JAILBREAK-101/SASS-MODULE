/* JS FOR NAVIGATION, SCROLLING TO BACKGROUND COLOR ACTION AND THEME SWITCH */

// Fixed Navigation Bar
const header = document.querySelector("header");

// Modal Open and Modal Close
const modalOpenButton = document.querySelector(".modal-open-button");
const modalCloseButton = document.querySelector(".modal-close-button");
const modal = document.querySelector(".modal");

// Theme Switcher for themes

// Function to watch screen width changes
const changeOnBreakpoint = () => {
  if (window.innerWidth <= 468 + "px") {
    header.classList.add("fixed-header");
  }

  return window.innerWidth;
};

onchange = () => changeOnBreakpoint();

// Eventlisteners to handle modal open and modal close
modalOpenButton.addEventListener("click", () => {
  modal.classList.remove("modal-visible");
  document.querySelector(".overlay").classList.add("modal-overlay");
});

modalCloseButton.addEventListener("click", () => {
  modal.classList.add("modal-visible");
  document.querySelector(".overlay").classList.remove("modal-overlay");
});
