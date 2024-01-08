import Swiper from 'swiper/bundle';

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        effect: 'cube',
        speed: 400,
        grabCursor: true,
        cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        },
    });
    // swiper();
});

