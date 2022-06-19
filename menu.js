const showmenu = document.querySelector('.nav__icon');
const links = document.querySelector('.nav__menu');




showmenu.addEventListener('click', () =>{
    links.classList.toggle('active');
    showmenu.classList.toggle('equis');

})