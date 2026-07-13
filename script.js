document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".gallery-list", {
    /*  loop: true, */
    slidesPerView: 1.5,
    spaceBetween: 12,
    navigation: {
      nextEl: ".gallery-list__arrow.swiper-button-next",
      prevEl: ".gallery-list__arrow.swiper-button-prev",
    },
    breakpoints: {
      769: { slidesPerView: 3, spaceBetween: 12 },
      992: { slidesPerView: 3, spaceBetween: 12 },
      1240: { slidesPerView: 3, spaceBetween: 12 },
      1440: { slidesPerView: 4, spaceBetween: 12 },
    },
  });

  const swiperRoot = new Swiper(".root-wrap", {
    slidesPerView: 1.5,
    spaceBetween: 24,
    grabCursor: true,
    snap: {
      snapTo: "center", //
      snapOffset: 0,
    },
    breakpoints: {
      600: {
        slidesPerView: "auto",
        spaceBetween: 24,
      },
      991: {
        slidesPerView: "auto",
        centeredSlides: false,
        spaceBetween: 24,
      },
    },
  });

  const swiperChoice = new Swiper(".choice-wrap__end", {
    slidesPerView: 2.5,
    spaceBetween: 8,
    grabCursor: true,
    snap: {
      snapTo: "center", //
      snapOffset: 0,
    },
    breakpoints: {
      600: {
        slidesPerView: 3,
        spaceBetween: 8,
      },
      991: {
        slidesPerView: 3,
        centeredSlides: false,
        spaceBetween: 8,
      },
    },
  });
});
