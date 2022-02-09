const svgElements = document.querySelectorAll(".svg-plus");
const burgerIcon = document.querySelectorAll(".toggle-menu");
const toggleSpan = document.querySelector(".toggle");
const contactsButton = document.querySelector(".contacts-button");
const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.getElementById("overlay");

svgElements.forEach((el) => {el.addEventListener("click", toggleAcordeon)});
burgerIcon.forEach((el) => {addEventListener("click", toggleMobMenu)});
contactsButton.addEventListener("click", closeMobMenu);


function toggleAcordeon(event){

    const parentElement = event.target.closest(".list-group");
    const hiddenContent = parentElement.querySelector(".list-content");

    hiddenContent.classList.toggle("active");
    event.target.closest(".svg-plus").classList.toggle("active");

}

function toggleMobMenu(event){
    
  if(event.target.dataset.nav){

    const overlay = document.getElementById("overlay");

    toggleSpan.classList.toggle("toggle--active")
    mobileMenu.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("noscroll");
  } 
}

function closeMobMenu(){
  
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("noscroll");
  toggleSpan.classList.remove("toggle--active");
}

const swiper = new Swiper(".swiper", {
 
  
  breakpoints: {
    441: {
      slidesPerView: 1.1
    },
    440: {
      slidesPerView: 1.35
    },
    393: {
      slidesPerView: 1.2
    },
    380: {
      slidesPerView: 1.15
    },
    360: {
      slidesPerView: 1.1
    }
  },
  
  
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });