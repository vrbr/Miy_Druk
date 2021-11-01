"use strict";

const swiper2 = new Swiper(".mySwiper-works", {
    slidesPerView: "auto",
    spaceBetween: 10,
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
        nextEl: ".works-button-next",
        prevEl: ".works-button-prev",
    },
    pagination: {
        el: ".works-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    watchSlidesProgress: true,
    watchSlidesvisibility: true,
    breakpoints: {
        768: {
        spaceBetween: 25
        },
        1200: {
        spaceBetween: 35
        }
    },
});