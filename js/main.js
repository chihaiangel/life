$(()=>{
  /* Fancybox */
  $('[data-fancybox="images"]').fancybox({})
  $('.popup').fancybox({
    touch: false
  })
})

const body = document.querySelector('body')

/* Menu */
const menu = document.querySelector('.menu')
const menuBtn = document.querySelector('.menu__btn')

menuBtn.addEventListener('click', ()=>{
  menu.classList.toggle('menu--active')
  body.classList.toggle('locked')
})

/* Accordion */
const accordionTitle = document.querySelectorAll(".accordion__title")
const accordionHeader = document.querySelectorAll(".accordion__header")

accordionHeader.forEach((item, i)=>{
	item.addEventListener('click', ()=>{
		item.classList.toggle('accordion__header-active')
		item.parentElement.classList.toggle('accordion__item-active')
	})
})

/* Login */
const loginIcon = document.querySelector('.login__icon')
let loginPassword = document.getElementById('login-password')

loginIcon.addEventListener('click', ()=>{
  if (loginPassword.type === 'password'){
    loginPassword.type = 'text'
  } else {
    loginPassword.type = 'password'
  }
})

/* Slider */
const cardsSlider = new Swiper('.cards__slider', {
  // loop: true,
  navigation: {
    nextEl: '.slider__next',
    prevEl: '.slider__prev',
  },
  // spaceBetween: 26,
  // centeredSlides: true,
  breakpoints: {
    100: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    590: {
      slidesPerView: 2,
    },
    820: {
      slidesPerView: 3,
    },
    1150: {
      slidesPerView: 4,
    },
    1400: {
      slidesPerView: 5,
    },
  }
});

const cardsSliderContent = new Swiper('.cards__slider-content', {
  slidesPerView: 1,
  allowSlidePrev: false,
  allowSlideNext: false
});

cardsSlider.controller.control = cardsSliderContent
cardsSliderContent.controller.control = cardsSlider

/* Slider Tabs */
const sliderItem = document.querySelectorAll('.slider__item')
let sliderContent = document.querySelectorAll('.slider__content')
let sliderContentContent = document.querySelectorAll('.slider__content-content')
let sliderContentText = document.querySelectorAll('.slider__content-content__text')
let sliderContentInfo = document.querySelectorAll('.slider__content-info__info')

function change(arr, i) {
  arr.forEach( item => {
    item.forEach( i => {i.classList.remove('active')})
    item[i].classList.add('active')
  })
}

for(let i = 0; i < sliderContentInfo.length; i++) {
  for (let j = 0; j < sliderContentContent.length; j++){
    sliderContentInfo[i].addEventListener('click', () => {
      change([sliderContentInfo, sliderContentText], i)
    })
  }
}

for (let i = 0; i < sliderItem.length; i++){
  sliderItem[i].addEventListener('click', ()=>{
    change([sliderContent], i)
  })
}