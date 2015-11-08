$(document).ready ->
    $('.stars').each ->
        stars = $(this).data 'stars'

        while stars -= 1
            $(this).append('<i class="fa fa-star">')

    $('.fancybox').fancybox { helpers: overlay: locked: false }

# Set target if link has an hash
if window.location.hash != ''
    target = $(window.location.hash)

# Do a nice scroll when clicked on an intern link
$('.scroll').smoothScroll().click (e) ->
    target = $(e.target.hash)

active = false
string = ''
code = '7848486683'

$(window).on
    # Catch key presses
    'keydown': (e) ->
        keycode = e.keyCode
        string += keycode

        if string.length == 10
            if string == code
                $('#flash').slideDown()

                setTimeout ->
                    $('#flash').slideUp()
                , 3000

                string = ''
            else
                string = ''

        if keycode == 40 || keycode == 38
            e.preventDefault()
            e.stopPropagation()

            return if active

            # Function?
            if keycode == 38
                if target == undefined
                    target = $('.page')
                else if !$(target.prev()).is '#sidebar'
                    target = target.prev()
            else if keycode == 40
                if target == undefined
                    target = $('.page').next()
                else if $(target.next()).hasClass 'page'
                    target = target.next()

            active = true
            setTimeout ->
                active = false
            , 500

            $('html,body').animate
                scrollTop: $(target).offset().top
            , 600

    'mousewheel DOMMouseScroll': (e) ->
        e.preventDefault()
        e.stopPropagation()

        return if active

        # Firefox fix
        delta = 0
        if navigator.userAgent.toLowerCase().indexOf('firefox') > -1
            console.log 'Firefox'
            delta = if e.originalEvent.detail > 0 then -1 else 1
        else
            console.log 'Other'
            delta = e.originalEvent.wheelDelta

        active = true
        setTimeout ->
            active = false
        , 500

        console.log 'Delta: ' + delta

        if delta > 0
            if target == undefined
                target = $('.page')
            else if !$(target.prev()).is '#sidebar'
                target = target.prev()
        else
            if target == undefined
                target = $('.page').next()
            else if $(target.next()).hasClass('page')
                target = target.next()

        $('html, body').animate
            scrollTop: $(target).offset().top
        , 600

###
setInterval ->
    if target == undefined || target.is '#home'
        $('#sidebar').fadeOut()
        $('#header').fadeOut()
    else
        $('#sidebar').fadeIn()
        $('#header').fadeIn()
###


### Mobile ###
$('#mobileSidebarButton').click ->
    mobileSidebar = $('#mobileSidebar')

    if mobileSidebar.hasClass 'active'
        mobileSidebar.animate { width: 0 }, 200, ->
            mobileSidebar.css { display: 'none', overflow: 'hidden' }

        mobileSidebar.removeClass 'active'
    else
        mobileSidebar.css { display: 'block' }.animate { width: '100%' }, 200

        mobileSidebar.addClass 'active'

$('#mobileSidebar a').click ->
    mobileSidebar = $('#mobileSidebar')
    mobileSidebar.removeClass 'active'
    mobileSidebar.animate { width: 0 }, 200, ->
        mobileSidebar.css { display: 'none', overflow: 'hidden' }
