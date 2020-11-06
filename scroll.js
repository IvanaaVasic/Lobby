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


                } 
                // else {
                //     var pos = $('.food-section').offset().top + $('.food-section').outerHeight(true) - $('.menu-left-bar').outerHeight(true) - 120;
                //     $('.menu-left-bar').css('position', 'absolute');
                //     $('.menu-left-bar').css('top', pos + 'px');
                //     $('.menu-left-bar').css('margin-top', '');

                // }

            } else {
                $('.menu-left-bar').css('position', 'absolute');
                $('.menu-left-bar').css('top', '');
                $('.menu-left-bar').css('margin-top', '0px');

            }

        });
    }
});




function selectSidebarItem(event) {
    document.querySelectorAll('.sidebar-item').forEach( el=> el.classList.remove('selected'))

    event.target.classList.add('selected')
// Remove 'selected' class from all sidebar items

// Add 'selected' class to the clicked one
}

function init() {
    // document.querySelector(".predjelo").onclick = changeColor1;
    // document.querySelector(".salate").onclick = changeColor2;

    document.querySelectorAll('.sidebar-item').forEach(
        el => el.onclick = selectSidebarItem
    )
}

window.onload = init();