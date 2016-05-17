window.$ = window.jQuery =  require('jquery');
window.slick =              require('./vendor/bower/slick');
window.styler =             require('jquery.formstyler');
window.gmaps =              require('gmaps');
window.inputmask =          require('jquery.inputmask');
window.validate =           require('jquery-validation');
// window.validate =           require('validate-js');

$(document).ready(function() {

    $("#index-slider").slick({
        dots: true,
        fade: false
    });

    $('select.js-select').styler();
    $('input.js-input-checkbox').styler();

    var map = new gmaps({
        el: '#index-map',
        lat: -12.043333,
        lng: -77.028333,
        scrollwheel: false
    });

    map.addMarker({
        lat: -12.043333,
        lng: -77.028333,
        title: 'Lima',
        infoWindow: {
            content: '<p>HTML Content</p>'
        }
    });

    $("#partner-slider").slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
    });

    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    
    $('.js-article-preview').click(function () {
        var _this = $(this);
        $('.js-article-text').toggleClass("_hide")
    });

    $('.js-input-tel').inputmask({"mask": "(9) (999) 999-9999", greedy: false});

    $("#form-test-drive").validate({
        errorClass: "-error",
        validClass: "valid",
        highlight: function( element, errorClass, validClass ) {
            $(element).parent().addClass(errorClass).removeClass(validClass);
        },
        unhighlight: function( element, errorClass, validClass ) {
            $(element).parent().removeClass(errorClass).addClass(validClass);
        },
        errorPlacement: $.noop
    });
});