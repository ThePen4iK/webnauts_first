new Swiper('.projecty__slider', {    
    slidesPerView: 3,
    spaceBetween: 161, 
    centeredSlides: true,
    loop: true,
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    pagination: {
        el: '.swiper-pagination',   
        type: 'fraction'   
    },
});