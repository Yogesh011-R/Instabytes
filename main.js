import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';

import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  speed: 500,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    620: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    700: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 640px
  },
});

var splide = new Splide('.splide', {
  perPage: 3,
  gap: '2rem',
  trimSpace: true,
  breakpoints: {
    1200: {
      perPage: 2,
    },
    620: {
      perPage: 1,
    },
  },
});

splide.mount();
