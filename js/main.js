// new Swiper('.projecty__slider', {    
//     slidesPerView: 3,
//     spaceBetween: 161, 
//     centeredSlides: true,
//     loop: true,
    
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//     pagination: {
//         el: '.swiper-pagination',   
//         type: 'fraction'   
//     },
// });

let popUp = document.querySelector('.popup');
let btn = document.querySelector('.btn-popup');
let popUpClose = document.querySelector('.popup__close')
let footerBtn = document.querySelector('.btn-dark');

function showPopUpOnClick(){
    popUp.classList.add('popup-show');
}

btn.addEventListener('click', showPopUpOnClick);

footerBtn.addEventListener('click', showPopUpOnClick);
popUpClose.addEventListener('click', ()=>{
    popUp.classList.remove('popup-show');
});
