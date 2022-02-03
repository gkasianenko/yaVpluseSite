const svgElements = document.querySelectorAll(".svg-plus");
const burgerIcon = document.querySelector(".toggle-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const toggleSpan = document.querySelector(".toggle");
const contactsButton = document.querySelector(".contacts-button");

svgElements.forEach((el) => {el.addEventListener("click", toggleAcordeon)});
burgerIcon.addEventListener("click", toggleMobMenu);
contactsButton.addEventListener("click", closeMobMenu);



function toggleMobMenu(){
    
    const overlay = document.getElementById("overlay");

    toggleSpan.classList.toggle("toggle--active")
    mobileMenu.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("noscroll");
}

function closeMobMenu(){
  
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("noscroll");
  toggleSpan.classList.remove("toggle--active");
}


const swiper = new Swiper(".swiper", {
  slidesPerView: 1.4,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  