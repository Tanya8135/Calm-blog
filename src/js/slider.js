import Swiper from "swiper";
import 'swiper/css/bundle';

const swiperOpt = new Swiper('.swiper', {
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 100,
});




// document.addEventListener('DOMContentLoaded', function () {
//     const swiper = new Swiper('.swiper', {
//         slidesPerView: 2,
//         direction: getDirection(),
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//         on: {
//             resize: function () {
//                 swiper.changeDirection(getDirection());
//             },
//         },
//     });

//     function getDirection() {
//         const windowWidth = window.innerWidth;
//         const direction = window.innerWidth <= 320 ? 'vertical' : 'horizontal';

//         return direction;
//     }
// })