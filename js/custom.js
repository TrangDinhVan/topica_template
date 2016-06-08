jQuery(document).ready(function($) {
    $('#back-to-top').on('click', function(event) {
        event.preventDefault();
        $('body, html').animate({scrollTop: 0}, 800);
    });
});
$(window).on('scroll', function(event) {
    var st = $(this).scrollTop();
    if( st > 500 ){
        $('#back-to-top').css('display', 'block');
    }else{
        $('#back-to-top').css('display', 'none');
    }
});