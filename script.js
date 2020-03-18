/* Header MENU */
const MENU = document.getElementById('menu');
const MENU_ITEM = MENU.querySelectorAll('li');
MENU.addEventListener('click', (evt) => {
    MENU_ITEM.forEach(el => el.querySelector('a').classList.remove('active'));
    evt.target.classList.add('active');
})



/* Portfolio Buttons*/
const BUTTONS_BOX = document.getElementById('portfolio-buttons');
const BUTTONS = BUTTONS_BOX.querySelectorAll('button');

BUTTONS_BOX.addEventListener('click', (evt) => {
    BUTTONS.forEach(el => el.classList.remove('active'));

    const IMAGES_BOX = document.getElementById('images_box');
    const IMAGES = IMAGES_BOX.querySelectorAll('img');
    const TAB1 = [];
    for (let i = 0; i < IMAGES.length; i++) {
        let currentImage;
        if (i === IMAGES.length - 1) {
            currentImage = IMAGES[0];
        } else {
            currentImage = IMAGES[i + 1];
        }
        TAB1.push(currentImage);
    }
    IMAGES_BOX.innerHTML = '';
    for (let i = 0; i < IMAGES.length; i++) {
        IMAGES_BOX.append(TAB1[i]);
    }

    evt.target.classList.add('active');
})

// Porfolio Frames
const IMAGES_BOX = document.getElementById('images_box');
const IMG = IMAGES_BOX.querySelectorAll('img');
IMAGES_BOX.addEventListener('click', (evt) => {
    IMG.forEach(el => el.classList.remove('frame'));
    evt.target.classList.add('frame');
})


// POPUP
const popup = document.querySelector('.modal');
const openPopupButton = document.querySelector('#submit');
const closePopupButton = popup.querySelector('.button_close');

openPopupButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  let subject_value = document.getElementById('subject').value.toString();
  let description_value = document.getElementById('description').value.toString();
  const subject_box = document.getElementById('subjectBox');
  const description_box = document.getElementById('descriptionBox');
  
  if(subject_value == ''){
    subject_box.innerText = 'Без темы';
  } else {
    subject_box.innerHTML = `Тема: <span class="yellow">${subject_value}</span>`;
  }

  if(description_value == ''){
    description_box.innerText = 'Без описания';
  } else {
    description_box.innerHTML = `Описание: <span class="yellow">${description_value}</span>`
  }
  popup.classList.add('modal--show');

  closePopupButton.addEventListener('click', function () {
    description_box.innerText = '';
    subject_box.innerText = '';
    popup.classList.remove('modal--show');
    document.getElementById('form').reset();
  });
});


// Esc
// document.addEventListener('keydown', function (evt) {
//   if (evt.keyCode === 27) {
//     popup.classList.remove('modal--show');
//   }
// });


// Click phone
const phones = document.querySelectorAll('.phone');
let clickPhone =(event)=>{
  if (event.target.classList.contains('phoneOn')){
    event.target.parentElement.lastElementChild.classList.toggle('toggle');
  }
  else {
    event.target.parentElement.lastElementChild.classList.toggle('toggle');
  }
} 

for (let phone of phones){
  phone.addEventListener('click', clickPhone);
}


// Slider

const arrowLeft = document.getElementById("arrow_left")
const arrowRight = document.getElementById("arrow_right")
const slides = document.querySelectorAll(".slide")
const slider = document.getElementById("slider")

arrowLeft.addEventListener("click", changeSlideLeft)
arrowRight.addEventListener("click", changeSlideRight)

function changeSlideLeft() {
  changeSlide("left")
}

function changeSlideRight() {
  changeSlide("right")
}

function changeSlide(direction) {
  for (let slide of slides) {
    slide.classList.toggle("slide_hide")
  }
  for (let slide of slides) {
    if (!slide.classList.contains("slide_hide")) {
      changeSlideClass(slide, `slider-${direction}`)
    } else changeSlideClass(slide, `slider-${direction}-gone`)
  }
  slider.classList.toggle("slider_two")
}

function changeSlideClass(el, newClass) {
  el.classList.add(newClass)
  setTimeout(() => {
    el.classList.remove(newClass)
  }, 200)
}
