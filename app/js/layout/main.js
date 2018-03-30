jQuery(document).ready(function(){   
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
});