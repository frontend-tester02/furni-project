  ready()


// Testimonials
const swiper = new Swiper('.swiper', {
  autoHeight: true,
  slidesPerView: 1,
  grabCursor: true,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});