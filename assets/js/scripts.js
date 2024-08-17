// Burger Menu Open //
document.addEventListener("DOMContentLoaded", function () {
  // Выбираем бургер-кнопку и навигацию
  let burgerButton = document.getElementById("burgerButton");
  const menuDialog = document.querySelector("#mobileMenu");
  let links = document.querySelectorAll(".mobile__menu-list li a");
  let body = document.querySelector("body");
  const menuClose = document.querySelector(".mobile__menu-close");

  // Если бургер-кнопка существует, добавляем обработчик события
  if (burgerButton) {
    burgerButton.addEventListener("click", function (e) {
      e.stopPropagation(); // Остановка всплытия события
      menuDialog.showModal();
      body.classList.add("lock");
      menuDialog.classList.add("open");
    });
  }

  // Функция плавного закрытия меню
  function closeMenu() {
    menuDialog.classList.remove("open");
    body.classList.remove("lock");
    menuDialog.addEventListener(
      "transitionend",
      function () {
        menuDialog.close();
      },
      { once: true }
    );
  }

  // Закрытие меню по кнопке
  menuClose.addEventListener("click", closeMenu);

  // Закрытие меню по клику на ссылку
  links.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
});
// Burger Menu Open //

// Fixed header
$(document).ready(function () {
  var header = $(".header"),
    main = $(".main"),
    headerH = header.innerHeight(),
    scrollOffset = $(window).scrollTop();

  checkScroll(scrollOffset);

  $(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    if (scrollOffset >= headerH) {
      header.addClass("fixed");
      main.css("padding-top", headerH); // Добавляем верхний отступ
    } else {
      header.removeClass("fixed");
      main.css("padding-top", 0); // Убираем верхний отступ
    }
  }
});
// // Fixed header end

//swiper
const progressRows = document.querySelectorAll(".hero__swiper-progress");
let swiper;

swiper = new Swiper(".swiper", {
  observer: true,
  observeParents: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Настройки для различных размеров экранов
  breakpoints: {
    // Когда ширина экрана >= 320px
    320: {
      slidesPerView: 1.6,
      spaceBetween: 10,
    },
    // Когда ширина экрана >= 480px
    561: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    // Когда ширина экрана >= 640px
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 30,
    },
  },
});
// swiper
