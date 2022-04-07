window.addEventListener("DOMContentLoaded", () => {
  const closeMenuBtn = document.querySelector(".close");
  const openMenuBtn = document.querySelector(".open");

  if (document.readyState === "complete") {
    const nav = document.querySelectorAll(".nav__column");
    nav.addEventListener("click", () => {
      categoryBtn.addEventListener("click", this.navcloseHandler.bind(this));
    });
  }
  openMenuBtn.addEventListener("click", () => {
    if (document.readyState === "complete") {
      const navMenu = document.querySelector(".nav__column");
      if (navMenu.classList.contains("active")) {
        return;
      }
      navMenu.classList.add("active");
      openMenuBtn.style.display = "none";
      closeMenuBtn.style.display = "block";
    }
  });

  closeMenuBtn.addEventListener("click", this.navcloseHandler.bind(this));
});

function navcloseHandler() {
  const closeMenuBtn = document.querySelector(".close");
  const openMenuBtn = document.querySelector(".open");

  if (document.readyState === "complete") {
    const navMenu = document.querySelector(".nav__column");

    if (navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
    } else {
      return;
    }
    closeMenuBtn.style.display = "none";
    openMenuBtn.style.display = "block";
  }
}
