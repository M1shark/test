$('.hero__slider').slick({
    arrows: false,
    //autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
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
jQuery(($) => {
    $('.select').on('click', '.select__head', function() {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.select').on('click', '.select__item', function() {
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function(e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
        }
    });
});