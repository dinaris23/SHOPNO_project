jQuery(document).ready(function(){   
    $('.top-slider').slick({
        dots: true,
        customPaging: function(slider, i) {
            return '<span class="dot"></span>';
            },
        autoplay: true,
        arrows: false
    });    
    $('.left-slider').slick({
        dots: true,
        customPaging: function(slider, i) {
            return '<span class="dot"></span>';
            },
        autoplay: false,
        asNavFor: '.right-slider',
        arrows: false
    });    
    $('.right-slider').slick({
        dots: false,
        prevArrow: '<div class="prev"></div>',
        nextArrow: '<div class="next"></div>',
        autoplay: false,
        asNavFor: '.left-slider',
        arrows: true
    });    
    $('.slick-dots li button').remove();
    $('.burger').click(function(){
        $('.burger_l__top').toggleClass('active');
        $('.burger_l__middle').toggleClass('active');
        $('.burger_l__bottom').toggleClass('active');
        $('.header_nav').slideToggle(300, function(){
            if($(this).css('display') === 'none') {
                $(this).removeAttr('style')
                }
        });
    });
    $('.modal-link').click(function(){
        $(this).parent().parent().prev().addClass('modal-active');
        $('.cross').click(function(){
            $('.services_modal').removeClass('modal-active');
        });
    });
});

//==== pop up ====

var delay_popup = 2000;
var elem = document.getElementById('bg_popup');
    setTimeout("elem.style.opacity = '1'", delay_popup);