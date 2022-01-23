const svgElements = document.querySelectorAll(".svg-plus");

svgElements.forEach((el) => {el.addEventListener("click", toggleAcordeon)});


function toggleAcordeon(event){

    const parentElement = event.target.closest(".list-group");
    const hiddenContent = parentElement.querySelector(".list-content");

    hiddenContent.classList.toggle("active");
    event.target.closest(".svg-plus").classList.toggle("active");

}