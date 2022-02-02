const svgElements = document.querySelectorAll(".svg-plus");
const burgerIcon = document.querySelector(".toggle-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const videoWrapper = document.querySelector(".learn-more__video-wrapper");
const videoOverlay = document.querySelector(".overlay-video");
const toggleSpan = document.querySelector(".toggle");
const contactsButton = document.querySelector(".contacts-button");

svgElements.forEach((el) => {el.addEventListener("click", toggleAcordeon)});
burgerIcon.addEventListener("click", toggleMobMenu);
videoWrapper.addEventListener("click", openVideoOverlay);
videoOverlay.addEventListener("click", closeVideoOverlay);
contactsButton.addEventListener("click", closeMobMenu);

function toggleAcordeon(event){

    const parentElement = event.target.closest(".list-group");
    const hiddenContent = parentElement.querySelector(".list-content");

    hiddenContent.classList.toggle("active");
    event.target.closest(".svg-plus").classList.toggle("active");

}

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
}

function openVideoOverlay(){
  videoOverlay.classList.remove("hidden");
  videoOverlay.classList.add("active");
  document.body.classList.add("noscroll");
}

function closeVideoOverlay(video){
  videoOverlay.classList.remove("active");
  videoOverlay.classList.add("hidden");
  document.body.classList.remove("noscroll");

 
  
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

  