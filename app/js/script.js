const btnHamburger = document.getElementById("btnHamburger");
const header = document.getElementsByClassName("header")[0];
const body = document.body;
const fadeElems = document.querySelectorAll(".has-fade");

// Function to toggle menu
btnHamburger.addEventListener("click", () => {
  const isOpen = header.classList.toggle("open");

  fadeElems.forEach((elem) => {
    if (isOpen) {
      elem.classList.add("fade-in");
      elem.classList.remove("fade-out");
    } else {
      elem.classList.remove("fade-in");
      elem.classList.add("fade-out");
    }
  });

  // Only disable scrolling when menu is open
  if (window.innerWidth <= 1023) {
    body.style.overflowY = isOpen ? "hidden" : "auto";
    body.style.userSelect = isOpen ? "none" : "auto";
  }
});

// Fix scrollbar on resize
window.addEventListener("resize", () => {
  if (window.innerWidth > 1023) {
    fadeElems.forEach((elem) => {
      elem.classList.remove("fade-out");
    });

    // Ensure scroll is always enabled when resizing back to desktop
    body.style.overflowY = "auto";
    body.style.userSelect = "auto";
  } else {
    // If menu is open on mobile, disable scrolling
    if (header.classList.contains("open")) {
      body.style.overflowY = "hidden";
      body.style.userSelect = "none";
    }
  }
});
