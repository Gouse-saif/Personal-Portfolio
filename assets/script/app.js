
// ======= Script For Navbar Style Color Changing =======
const header = document.querySelector("header");
window.addEventListener("scroll", () =>{
  header.classList.toggle("header__Color", window.scrollY > 0);
})

// ======= Script For Navbar Active link =======
// const sections = document.querySelectorAll('section[id]')
// function scrollActive(){
//   const scrollY = window.pageXOffset

//   sections.forEach(current =>{
//     const sectionHeight = current.offsetHeight,
//           sectionTop = current.offsetTop - 58,
//           sectionId = current.getAttribute('id')

//     if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//       document.querySelector('.nav__menu  a[href '=' + sectionId = ]').classList.add('active-link')
//     }
//     else{
//       document.querySelector('.nav__menu  a[href '=' + sectionId = ]').classList.remove('active-link')
//     }
//   })
// }
// window.addEventListener('scroll', scrollActive)

// ======= Script For Light-theme =======

let lightMode = localStorage.getItem('lightMode');

const lightmodetoggle = document.querySelector('#lightmodetoggle');

const enableLightMode = () => {
  document.body.classList.add('lightmode');
  localStorage.setItem('lightMode', 'enabled');
}

const disableLightMode = () => {
  document.body.classList.remove('lightmode');
  localStorage.setItem('lightMode', null);
}

if(lightMode === 'enabled'){
  enableLightMode();
}


lightmodetoggle.addEventListener('click', () => {

  lightMode = localStorage.getItem('lightMode');

  if(lightMode !== 'enabled'){
    enableLightMode();
  }
  else{
    disableLightMode();
  }
});


// ======= Script For Project Section =======
let mixWork = mixitup('.portfolio__container', {
  selectors: {
    target: '.portfolio__card'
  },
  animation:{
    duration: 300
  }
});

// ======= Script For Testimonial Section =======
var swiperTestimonial = new Swiper(".testimonial__container", {
  spaceBetween: 30,
  loop: true,
  grabCursor:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
  },
});

// Script For Bottom To Top Scroll

$(document).ready(function(){

  $(window).scroll(function(){
    var showAfter = 60;
    if($(this).scrollTop() > showAfter){
      $('#top__btn').fadeIn();
    }else{
      $('#top__btn').fadeOut();
    }
  });
  
  $('#top__btn').click(function(){
    $('html, body').animate({scrollTop : 0}, 800);
    return false;
  });
  
  });