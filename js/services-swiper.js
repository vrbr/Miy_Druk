"use strict";

const swiper1 = new Swiper(".mySwiper-services", {
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
    navigation: {
        nextEl: ".services-button-next",
        prevEl: ".services-button-prev",
    },
    pagination: {
        el: ".services-pagination",
        clickable: true,
        dynamicBullets: true,
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