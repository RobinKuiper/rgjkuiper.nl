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

    $('.fancybox').fancybox({
        helpers: {
            overlay: {
                locked: false
            }
        }
    });
    $('a').smoothScroll();

});

var target;

$('#sidebar a').click(function(e){
   target = $(e.target.hash);
    console.log(e);
    console.log(e.target.hash);
    console.log(target);
});

$('#mobileSidebar .menu-handler .btn').click(function(){
    $('#mobileSidebar .list-group').toggleClass('collapsed', 500);
});

var active = false;
$(window).on({
    'mousewheel': function(e) {
        e.preventDefault();
        e.stopPropagation();

        if(active) return;

        active = true;
        setTimeout(function(){ active = false; }, 500);

        console.log('after timeout');

        if(e.originalEvent.wheelDelta > 0) {
            if(target === undefined){ target = $('.page');
            }else{
                if(!$(target.prev()).is('#sidebar')) {
                    target = target.prev();
                }
            }
        }else{
            if(target === undefined){ target = $('.page').next();
            }else{
                if($(target.next()).hasClass('page')) {
                    target = target.next();
                }
            }
        }
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 600);
    }
});
