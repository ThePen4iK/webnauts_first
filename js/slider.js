new Swiper('.projecty__slider', {  
    slidesPerView: 1.2,
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