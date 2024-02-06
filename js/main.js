
// Site header links
const siteNavLink = document.querySelectorAll('.sitenav__link');
const siteNavItem = document.querySelectorAll('.sitenav__item');


function deactiveItems () {
  siteNavItem.forEach((item) => {
    item.classList.remove('sitenav__item-active');

  });

  siteNavLink.forEach((links) => {
    links.classList.remove('sitenav__link-active');
  });
};

siteNavLink.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    deactiveItems();
    link.parentElement.classList.add('sitenav__item-active');
    link.classList.add('sitenav__link-active');
  });
});


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