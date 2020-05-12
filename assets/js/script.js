                            // Nav Menu
const navbarList = document.getElementById("menu");
const navbarToggler = document.querySelector(".toggler");
navbarToggler.addEventListener('click', navbarTogglerClick);

function navbarTogglerClick () {
    navbarList.classList.toggle("menu_active");
    navbarToggler.classList.toggle("toggler_active");
}
                            // Slider
var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });