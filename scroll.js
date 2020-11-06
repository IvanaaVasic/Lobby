$(function() {
    if (!(typeof $('.menu-left-bar').offset() === 'undefined')) {
        var eTop = $('.menu-left-bar').offset().top;
        $(window).scroll(function() {

            if (eTop - $(window).scrollTop() <= 45) {

                if (($('.food-section').offset().top + $('.food-section').outerHeight(true) - $(window).scrollTop() - $('.menu-left-bar').outerHeight(true) >= 50)) {
                    $('.menu-left-bar').css('position', 'fixed');
                    $('.menu-left-bar').css('top', '0px');
                    $('.menu-left-bar').css('margin-top', '');
                    $('.menu-left-bar').css('padding-top', '15px');

                } else {
                    var pos = $('.food-section').offset().top + $('.food-section').outerHeight(true) - $('.menu-left-bar').outerHeight(true) - 120;
                    $('.menu-left-bar').css('position', 'absolute');
                    $('.menu-left-bar').css('top', pos + 'px');
                    $('.menu-left-bar').css('margin-top', '');

                }

            } else {
                $('.menu-left-bar').css('position', 'absolute');
                $('.menu-left-bar').css('top', '');
                $('.menu-left-bar').css('margin-top', '0px');

            }

        });
    }
});