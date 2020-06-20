$(document).ready(function () {

    //Mobile menu
    $('.mobile-button').on('click', function () {
        $('.navigation').slideToggle(400);
    });

    $(window).on('resize', function () {
        const windowWidth = $(window).outerWidth();
        if(windowWidth > 768) {
            $('.navigation').removeAttr('style');
        }
    });

    // Slider
    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        loop: true,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 3000,
        },
    });

    // Modal
    $('.header').on('click', '.login-button', function () {
        $('#login-modal').fadeIn();
    });

    $('.modal__window').on('click', '.modal__close', function () {
        $('#login-modal').fadeOut();
    });
});
