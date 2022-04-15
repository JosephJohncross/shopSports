window.addEventListener("DOMContentLoaded", () => {
  const closeMenuBtn = document.querySelector(".close");
  const openMenuBtn = document.querySelector(".open");
  const app = document.querySelector('.app');

  app.addEventListener('mouseover' , () => {
    if (document.readyState === "complete") {
      const modal = document.querySelector('.add-modal');
      const bodyColumn = document.querySelector('.body__column'); 
  
      bodyColumn.addEventListener('click', (event) => {
        let target = event.target;
        if (target.tagName !== "BUTTON"){
          return;
        }
        else{
          setTimeout(()=>{
          modal.classList.add('active');
            setTimeout(() => {
              modal.classList.remove('active');
            }, 2000);     
          }, 300);
        }
      })
    }
  })
  
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

  function addMessageModal() {
    
  }
}
