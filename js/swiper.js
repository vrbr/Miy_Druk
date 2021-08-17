"use strict";

new Swiper(".mySwiper", {
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
    keyboard: {
        enabled: true,
        onlyInViewport: true
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        768: {
        spaceBetween: 25
        },
        1200: {
        spaceBetween: 35
        }
    },
    watchSlidesProgress: true,
    watchSlidesvisibility: true
});