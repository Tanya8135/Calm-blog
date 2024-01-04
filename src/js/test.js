// import anime from 'animejs/lib/anime.es.js';

// const test = document.querySelector('.swipe');

// anime({
//     targets: test,
//     // translate: 250,
//     rotate: '15deg',
//     duration: 700,
//     loop: 2,
//     easing: 'easeInOutQuad',
// });

// runAnimation();



import anime from 'animejs/lib/anime.es.js';

const test = document.querySelector('.swipe');

function fldsldf() {
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                anime({
                    targets: test,
                    // translate: 250,
                    rotate: '15deg',
                    duration: 700,
                    loop: 2,
                    easing: 'easeInOutQuad',
                });
                observer.unobserve(test);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(test);
}

function runAnimation() {
    anime({
        targets: test,
        rotate: '15deg',
        duration: 700,
        loop: 3,
        easing: 'easeInOutQuad',
    });
}

// Запуск анімації при завантаженні сторінки
runAnimation();

// Запуск анімації при потраплянні вьюпорт
fldsldf();