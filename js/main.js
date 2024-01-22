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


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// // TESTIMONIALS

// const tsnItem = document.querySelector('.testimonials__item')
// const tsnActive = document.querySelector('.testimonials__content');

// // prev and next
// const tsnNext = document.querySelector('.testimonials__control__next');
// const tsnPrev = document.querySelector('.testimonials__control__prev');

// function activeTsn () {
//   tsnNext.addEventListener('click', () => {
//     tsnItem.innerHTML = `
//     <div class="testimonials__content>
//     <p class="testimonials__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, eos ullam. Molestiae magni dolore quidem illum assumenda? Explicabo dolores provident iste! Soluta neque voluptas dolorem deleniti animi exercitationem reiciendis? Aperiam, illum. Officiis voluptas voluptatum, tempore iure quibusdam corrupti labore fugiat impedit obcaecati tempora repellendus excepturi minus. Tempora facilis eum ipsa?</p>
//     <img class="testimonials__img" src="img/person-1.png" alt="Testimonials person image" width="80" height="77">
//     <h3 class="testimonials__name">Maria Jones</h3>
//     <p class="testimonials__job-name">CEO, Co-Founder, XYZ Inc.</p>
//     </div>
//     `
//   })
// };

// activeTsn()
