window.addEventListener("DOMContentLoaded", () => {
  console.log("Document has been loaded");

  const closeMenuBtn = document.querySelector(".close");
  const openMenuBtn = document.querySelector(".open");
  console.log(openMenuBtn);

  openMenuBtn.addEventListener("click", () => {
    if (document.readyState === "complete") {
      const navMenu = document.querySelector(".nav__column");

      navMenu.style.display = "block";
      openMenuBtn.style.opacity = 0;
      if (navMenu.classList.contains("active")) {
        return;
      }
      navMenu.classList.add("active");
    }
  });   
});
