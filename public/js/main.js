/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    360:{
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});


var textWrapper = document.querySelector('.ml142 .letters2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter2'>$&</span>");

function animateHeading1() {
  anime.timeline({loop: 1})
    .add({
      targets: '.ml142 .line2',
      scaleX: [0, 1],
      opacity: [0.5, 1],
      easing: "easeInOutExpo",
      duration: 1200
    }).add({
      targets: '.ml142 .letter2',
      opacity: [0, 1],
      translateX: [40, 0],
      translateZ: 0,
      scaleX: [0.3, 1],
      easing: "easeOutExpo",
      duration: 1000,
      offset: '-=600',
      delay: (el, i) => 150 + 25 * i
    });
}

// Initial animation
animateHeading1();

// Mouseover animation
document.querySelector('.ml142').addEventListener('mouseover', function() {
  animateHeading1();
});


var textWrapper = document.querySelector('.ml143 .letters3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter3'>$&</span>");

function animateHeading2() {
  anime.timeline({loop: 1})
    .add({
      targets: '.ml143 .line3',
      scaleX: [0, 1],
      opacity: [0.5, 1],
      easing: "easeInOutExpo",
      duration: 1200
    }).add({
      targets: '.ml143 .letter3',
      opacity: [0, 1],
      translateX: [40, 0],
      translateZ: 0,
      scaleX: [0.3, 1],
      easing: "easeOutExpo",
      duration: 1000,
      offset: '-=600',
      delay: (el, i) => 150 + 25 * i
    });
}

// Initial animation
animateHeading2();

// Mouseover animation
document.querySelector('.ml143').addEventListener('mouseover', function() {
  animateHeading2();
});