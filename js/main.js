let popUp = document.querySelector(".popup");
let popUpAgree = document.querySelector(".popup__agree");

let btn = document.querySelector(".btn-popup");
let popUpClose = document.querySelector('.popup__close');

let popUpCloseDark = document.querySelector('.close-dark');
let footerBtn = document.querySelector('.btn-dark');

function showPopUpOnClick() {
   popUp.classList.add('popup-show');  
};
function showPopUpDarkOnClick() {
    popUpAgree.classList.add('popup-show');  
 };
function closePopUpOnClick(){
    popUp.classList.remove('popup-show');  
}
function closePopUpDarkOnClick(){ 
    popUpAgree.classList.remove('popup-show');

}

btn.addEventListener("click", showPopUpOnClick);
footerBtn.addEventListener("click", showPopUpDarkOnClick);


popUpClose.addEventListener('click', closePopUpOnClick);
popUpCloseDark.addEventListener('click', closePopUpDarkOnClick);