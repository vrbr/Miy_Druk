"use strict";

if (document.documentElement.clientWidth < 768) {
  let headerMob = document.querySelector(".header-mob");
  let body = document.querySelector(".body");

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      headerMob.classList.add("header-mob__fixed");
      body.style.paddingTop = "65px";
    } else {
      headerMob.classList.remove("header-mob__fixed");
      body.style.paddingTop = "0px";
    }
  }

  ;
} else {
  const headerDesk = document.querySelector(".header-desk__nav");

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
      headerDesk.classList.add("header-desk__nav-fixed");
    } else {
      headerDesk.classList.remove("header-desk__nav-fixed");
    }
  }

  ;
}