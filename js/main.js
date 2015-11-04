$(document).ready(function() {

    $('.star').each(function () {
        var total = 5;
        var stars = 0;
        if ($(this).hasClass('one')) {
            stars = 1
        }
        if ($(this).hasClass('two')) {
            stars = 2
        }
        if ($(this).hasClass('three')) {
            stars = 3
        }
        if ($(this).hasClass('four')) {
            stars = 4
        }
        if ($(this).hasClass('five')) {
            stars = 5
        }

        for (var i = 0; i < stars; i++)
            $(this).append('<i class="fa fa-star">');

        for (var j = 0; j < total - stars; j++)
            $(this).append('<i class="fa fa-star-o">');
    });

    $('.fancybox').fancybox();
    $('a').smoothScroll();

});
