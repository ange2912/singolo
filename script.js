const MENU = document.getElementById('menu');
const MENU_ITEM = MENU.querySelectorAll('li');
MENU.addEventListener('click', (evt)=>{
    MENU_ITEM.forEach(el => el.querySelector('a').classList.remove('active'));
    evt.target.classList.add('active');
})