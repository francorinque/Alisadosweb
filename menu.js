const show = document.querySelector('.icon');
const link = document.querySelector('.mobile_links');




show.addEventListener('click', () =>{
    link.classList.toggle('active');
    show.classList.toggle('equis');

})