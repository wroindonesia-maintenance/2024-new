$(function() {
    var owl = $('.owl-carousel'),
        owlOptions = {
            autoplay: true,
            lazyLoad: true,
            loop: true,
            margin: 10,
            /*
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            */
            responsiveClass: true,
            autoHeight: true,
            autoplayTimeout: 3000,
            smartSpeed: 800,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
            
                600: {
                    items: 3
                },
            
                1024: {
                    items: 4
                },
            
                1366: {
                    items: 4
                }
            }
        };

    if ( $(window).width() >= 0 ) {
        var owlActive = owl.owlCarousel(owlOptions);
    } else {
        owl.addClass('off');
    }

    $(window).resize(function() {
        if ( $(window).width() >= 767 ) {
            if ( $('.owl-carousel').hasClass('off') ) {
                var owlActive = owl.owlCarousel(owlOptions);
                owl.removeClass('off');
            }
        } else {
            if ( !$('.owl-carousel').hasClass('off') ) {
                owl.addClass('off').trigger('destroy.owl.carousel');
                owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
            }
        }
    });
});