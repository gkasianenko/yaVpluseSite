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

// initialize the validation library
const validation = new JustValidate(
  '#form',
  {
    errorFieldCssClass: 'is-invalid',
    errorFieldStyle: {
      border: '1px solid red',
    },
    errorLabelCssClass: 'is-label-invalid',
    errorLabelStyle: {
      color: 'red',
      textDecoration: 'underlined',
    },
    focusInvalidField: true,
    lockForm: true,
    tooltip: {
      position: 'bottom',
    },
    errorContainer: '.errors-container',
  },
  [
    {
      key: 'Name is too short',
      dict: {
        ru: 'Имя слишком короткое',
        es: 'El nombre es muy corto',
      },
    },
    {
      key: 'Field is required',
      dict: {
        ru: 'Обязательное поле',
        es: 'Se requiere campo',
      },
    },
    {
      key: 'The field must contain a minimum of 3 characters',
      dict: {
        ru: 'Минимум 3 символа'
        
      },
    },
  ]
);

// apply rules to form fields
validation
.addField('#name', [
  {
    rule: 'required',
    errorMessage: 'Введите имя',
  },
{
  rule: 'minLength',
  value: 3,
  errorMessage: 'Минимум 3 символа'
},
{
  rule: 'maxLength',
  value: 30,
  errorMessage: 'Максимум 30 символов'
},
])
.addField('#email', [
{
  rule: 'required',
  errorMessage: 'Введите email',
},
{
  rule: 'email',
  errorMessage: 'Неверный адрес электронной почты',
},
])
.addField('#textarea', [
  {
    rule: 'required',
    errorMessage: 'Заполните поле',
  },
]);





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