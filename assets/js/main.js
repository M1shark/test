$('.hero__slider').slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
});

$('.discover__card').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 992,
        settings: {
            slidesToShow: 2,
            dots: true,
        }
    }, {
        breakpoint: 592,
        settings: {
            slidesToShow: 1,
            dots: true,
        }
    }]


});
//burger
const menu = document.querySelector(".header__menu");
const burger = document.querySelector(".header__burger");
burger.addEventListener('click', function() {
    menu.classList.toggle('menu__active');
    if (menu.classList.contains('menu__active')) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "";
    };
});

//select