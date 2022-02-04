const svgElements = document.querySelectorAll(".svg-plus");
const burgerIcon = document.querySelector(".toggle-menu");
const toggleSpan = document.querySelector(".toggle");
const contactsButton = document.querySelector(".contacts-button");
const mobileMenu = document.querySelector(".mobile-menu");

svgElements.forEach((el) => {el.addEventListener("click", toggleAcordeon)});
burgerIcon.addEventListener("click", toggleMobMenu);
contactsButton.addEventListener("click", closeMobMenu);


function toggleAcordeon(event){

    const parentElement = event.target.closest(".list-group");
    const hiddenContent = parentElement.querySelector(".list-content");

    hiddenContent.classList.toggle("active");
    event.target.closest(".svg-plus").classList.toggle("active");

}

function toggleMobMenu(){
  const mobileMenu = document.querySelector(".mobile-menu");
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
  slidesPerView: 1.3,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });