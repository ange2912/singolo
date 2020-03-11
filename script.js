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

/*const SUBMIT = document.getElementById('submit');
SUBMIT.addEventListener('click', (evt)=>{
    evt.preventDefault();
})*/