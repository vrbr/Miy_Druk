"use strict";

const swiper3 = new Swiper(".mySwiper-clients", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
    },
    simulateTouch: true,
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,
    hashNavigation: {
        watchState: true
    },
    navigation: {
        nextEl: ".clients-button-next",
        prevEl: ".clients-button-prev",
    },
    pagination: {
        el: ".clients-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    watchSlidesProgress: true,
    watchSlidesvisibility: true,
    breakpoints: {
        460: {
            slidesPerView: 2,
        },
        618: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        1440: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});