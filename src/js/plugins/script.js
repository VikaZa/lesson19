$(document).ready(function () {
    //Mobile menu
    $('.navigation').on('click', '.navigation__button', function () {
        $('.navigation__menu').addClass('active');
    });

    $('.navigation').on('click', '.navigation__close', function () {
        $('.navigation__menu').removeClass('active');
    });
});

