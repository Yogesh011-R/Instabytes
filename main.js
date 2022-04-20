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
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    500: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    1000: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
console.log('🚀 ~ file: main.js ~ line 9 ~ swiper', swiper);
