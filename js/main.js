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