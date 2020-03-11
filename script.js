/* Header MENU */ 
const MENU = document.getElementById('menu');
const MENU_ITEM = MENU.querySelectorAll('li');
MENU.addEventListener('click', (evt)=>{
    MENU_ITEM.forEach(el => el.querySelector('a').classList.remove('active'));
    evt.target.classList.add('active');
})



/* Portfolio Buttons*/
const BUTTONS_BOX = document.getElementById('portfolio-buttons');
const BUTTONS = BUTTONS_BOX.querySelectorAll('button');
BUTTONS_BOX.addEventListener('click', (evt)=>{
    BUTTONS.forEach(el => el.classList.remove('active'));
    evt.target.classList.add('active');
})

/*const SUBMIT = document.getElementById('submit');
SUBMIT.addEventListener('click', (evt)=>{
    evt.preventDefault();
})*/