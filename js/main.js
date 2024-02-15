if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}


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



// CART COUNT
const tableList = document.querySelectorAll('.cart__tbody')


function ready() {
  // Remove list
  const removeList = document.querySelectorAll('.cart__remove-btn');
  for (let i = 0; i < removeList.length; i++) {
    let removeBtn = removeList[i];
    removeBtn.addEventListener('click', removeCartItem)
  }

  let quantityInput = document.querySelectorAll('.cart__price-count');
  for (let i = 0; i < quantityInput.length; i++) {
    let input = quantityInput[i];
    input.addEventListener('change', qauntityChanged)

  }

  let  addToCartButtons = document.getElementsByClassName('products__icon-btn');
  for (let i = 0; i < addToCartButtons.length; i++) {
    let button = addToCartButtons[i];
    button.addEventListener('click', addToCartClicked)
  }

}

function removeCartItem(e) {
  let buttonClicked = e.target
      buttonClicked.parentElement.parentElement.remove()
      updateCartTotal()

}

function qauntityChanged(e) {
  let input = e.target
  if(isNaN(input.value) || input.value<= 0) {
    input.value = 1
  }

  updateCartTotal()

}

// function addToCartClicked(e) {
//   let button = e.target
//   let productItem = button.parentElement.parentElement
//   let title = productItem.getElementsByClassName('products__name')[0].textContent
//   let price = productItem.getElementsByClassName('products__cost')[0].textContent
//   let imageSrc = productItem.getElementsByClassName('products__img')[0].src
//   console.log(title);
//   console.log(price);
//   console.log(imageSrc);

//   addItemToCart(title, price, imageSrc)
// }

// function addItemToCart(title, price, imageSrc) {
//   let cartRow = document.createElement('tr');
//   cartRow.classList.add('cart__tbody')
//   let cartItems = document.getElementsByClassName('cart__body')[0]
//   let cartItemNames = cartItems.getElementsByClassName('cart__name-product')
//   for (let i = 0; i < cartItemNames.length; i++) {
//     if (cartItemNames[i].textContent == title) {
//       alert("This item is already added to the cart")
//       return
//     }
//   }
//   let cartRowContents = `
//     <td class="cart__thumbnail">
//       <img class="cart__thumbnail-img" src="${imageSrc}" alt="Product image" width="160" height="160">
//     </td>
//     <td class="cart__name">
//       <h2 class="cart__name-product">${title}</h2>
//     </td>
//     <td class="cart__main-price">${price}</td>
//     <td>
//       <div class="cart__price-wrapper">
//         <input type="number" class="cart__price-count" value="1" aria-label="Cart price">
//       </div>
//     </td>
//     <td class="cart__price-total">${price}</td>
//     <td>
//       <button type="button" class="cart__remove-btn">X</button>
//     </td>

//     `
//   cartRow.innerHTML = cartRowContents
//   cartItems.append(cartRow)
//   cartRow.getElementsByClassName('cart__remove-btn')[0].addEventListener('click', removeCartItem);
//   cartRow.getElementsByClassName('cart__price-count')[0].addEventListener('change', qauntityChanged)

// }


// TOTAL-PRICE

function updateCartTotal() {
  let cartItemContainer = document.querySelector('.cart__body')
  let cartRows = cartItemContainer.getElementsByClassName('cart__tbody');
  let total = 0

  for (let i = 0; i < cartRows.length; i++) {
    let cartRow = cartRows[i]
    let priceElement = cartRow.getElementsByClassName('cart__main-price')[0]
    let quantityElement = cartRow.getElementsByClassName('cart__price-count')[0]
    let rowPriceTotal = cartRow.getElementsByClassName('cart__price-total')[0]

    let price = parseFloat(priceElement.textContent.replace('$', ''))
    let quantity = quantityElement.value

    total = total + (price * quantity)
    rowPriceTotal.textContent = '$' + (price * quantity) + '.00'

  }



  total = Math.round(total * 100) / 100
  const subTotal = document.querySelectorAll('.total-price__price')
  subTotal.forEach((item) => {
    item.textContent = '$' + total + '.00'
  })

}


// CHECKOUT


// CHECKBOX

const checkboxInputAccount = document.getElementById('checkbox-account');
const checkboxInputItem = document.getElementById('chechbox-item');
const checkboxInner = document.querySelector('.form__checkbox-inner');
const itemCheckbox = document.querySelector('.form__item-inner--checkbox')



checkboxInputAccount.addEventListener('click', () => {
  checkboxInner.classList.toggle('form__checkbox-inner--open')
})

checkboxInputItem.addEventListener('click', () => {
  itemCheckbox.classList.toggle('form__item-inner--open')
})

// DROPDOWN

const dropdownItem = document.querySelectorAll('.dropdown__link');
const dropdownDescr = document.querySelectorAll('.dropdown__text');

dropdownItem.forEach((item) => {
  item.addEventListener('click', () => {
    item.nextElementSibling.classList.toggle('dropdown--open')
  })
})