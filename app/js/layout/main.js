jQuery(document).ready(function(){   
    $('.slick-slider').slick({
        dots: true,
        customPaging: function(slider, i) {
            return '<span class="dot"></span>';
            },
        autoplay: true,
        arrows: false
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