var nav = $('.navigation');
var distance = $('.navigation').offset();

if (distance.top >= 150) {
    nav.addClass('scrolled');
}

$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 150) {
        nav.addClass('scrolled');
    } else {
        nav.removeClass('scrolled');
    }

});