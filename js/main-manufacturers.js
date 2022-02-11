const svgElements = document.querySelectorAll(".svg-plus");
const burgerIcon = document.querySelectorAll(".toggle-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const toggleSpan = document.querySelector(".toggle");
const contactsButton = document.querySelector(".contacts-button");

svgElements.forEach((el) => {el.addEventListener("click", toggleAcordeon)});
burgerIcon.forEach((el) => {addEventListener("click", toggleMobMenu)});
contactsButton.addEventListener("click", closeMobMenu);



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
  slidesPerView: 1.4,

  breakpoints: {
    1235: {
      slidesPerView: 1.4
    },
    1167: {
      slidesPerView: 1.3
    },
    1115: {
      slidesPerView: 1.2,
    },
    1030: {
      slidesPerView: 1.1
    },
    913: {
      slidesPerView: 1
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
      position: 'top',
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
    errorMessage: 'Заполните поле',
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
  errorMessage: 'Заполните поле',
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

