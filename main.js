import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';

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
