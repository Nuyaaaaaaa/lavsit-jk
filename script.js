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

  const choiceTabs = document.querySelectorAll(".choice-slider__tab");
  const choceMainImage = document.getElementById("choiceMainImage");

  choiceTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      // Убираем active у всех табов
      choiceTabs.forEach((t) => t.classList.remove("active"));

      // Добавляем active кликнутому табу
      this.classList.add("active");

      // Меняем основное изображение
      const choiceNewImage = this.getAttribute("data-image");
      const choiceNewImageMobile = this.getAttribute("data-image-mobile");

      if (choiceNewImage && choiceNewImageMobile) {
        choceMainImage.src = choiceNewImage;
        choceMainImage.srcset = `${choiceNewImageMobile} 360w, ${choiceNewImage} 768w`;
      }
    });
  });

  const rootTabs = document.querySelectorAll(".root-wrap__top");
  const rootCards = document.querySelectorAll(".root-card");

  rootTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const targetTab = this.getAttribute("data-tab");

      rootTabs.forEach((t) => t.classList.remove("active"));
      this.classList.add("active");

      rootCards.forEach((card) => {
        if (card.getAttribute("data-tab") === targetTab) {
          card.style.display = "block";
          card.classList.add("active");
        } else {
          card.style.display = "none";
          card.classList.remove("active");
        }
      });
    });
  });

  const initialActiveTab = document.querySelector(".root-wrap__top.active");
  if (initialActiveTab) {
    const targetTab = initialActiveTab.getAttribute("data-tab");

    rootCards.forEach((card) => {
      if (card.getAttribute("data-tab") === targetTab) {
        card.style.display = "block";
        card.classList.add("active");
      } else {
        card.style.display = "none";
        card.classList.remove("active");
      }
    });
  }
});
