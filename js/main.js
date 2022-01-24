const svgElements = document.querySelectorAll(".svg-plus");
const burgerIcon = document.querySelector(".toggle-menu");

svgElements.forEach((el) => {el.addEventListener("click", toggleAcordeon)});
burgerIcon.addEventListener("click", toggleMobMenu);


function toggleAcordeon(event){

    const parentElement = event.target.closest(".list-group");
    const hiddenContent = parentElement.querySelector(".list-content");

    hiddenContent.classList.toggle("active");
    event.target.closest(".svg-plus").classList.toggle("active");

}

function toggleMobMenu(){
    const mobileMenu = document.querySelector(".mobile-menu");
    const overlay = document.getElementById("overlay");

    mobileMenu.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("noscroll");
}