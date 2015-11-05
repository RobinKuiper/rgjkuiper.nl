$(document).ready(function() {

    $('.stars').each(function () {
        var total = 5;
        var stars = $(this).data('stars');

        for (var i = 0; i < stars; i++)
            $(this).append('<i class="fa fa-star">');
        for (var j = 0; j < total - stars; j++)
            $(this).append('<i class="fa fa-star-o">');
    });

    $('.fancybox').fancybox({
        helpers: {
            margin: 50,
            overlay: {
                locked: false
            }
        }
    });
});

var target;

$('#sidebar a').smoothScroll().click(function(e){
   target = $(e.target.hash);
});

$('#mobileSidebarButton').click(function(){
    var mobileSidebar = $('#mobileSidebar');
    if(mobileSidebar.hasClass('active')){
        mobileSidebar.animate({ width: 0 }, 200, function(){
            $('#mobileSidebar').css({display: 'none', overflow: 'hidden'});
        });
        mobileSidebar.removeClass('active');
    }else{
        mobileSidebar.css({display: 'block'}).animate({
            width: '100%'
        }, 200);
        mobileSidebar.addClass('active');
    }
});

$('#mobileSidebar .list-group-item').click(function(){
    var mobileSidebar = $('#mobileSidebar');
    mobileSidebar.removeClass('active');
    mobileSidebar.animate({ width: 0 }, 200, function(){
        $('#mobileSidebar').css({display: 'none', overflow: 'hidden'});
    });
});

var active = false;
$(window).on({
    'mousewheel DOMMouseScroll': function(e) {
        e.preventDefault();
        e.stopPropagation();

        if(active) return;

        // Firefox fix
        var delta = 0;
        if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1)
            if(e.originalEvent.detail > 0){
                delta = -1;
            }else
                delta = 1;
        else
            delta = e.originalEvent.wheelDelta;

        active = true;
        setTimeout(function(){ active = false; }, 500);

        if(delta > 0) {
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
        $('html,body').animate({
            scrollTop: $(target).offset().top
        }, 600);
    }
});

/*if (screen.width <= 800) {
    window.location = "http://m.rgjkuiper.nl";
}*/
