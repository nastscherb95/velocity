$(document).ready(function(){
    $('.caption h1').fadeIn(1000);
    $('.caption h1').animate ({
        fontSize: '90px'
    },1500)
});
$(document).ready(function(c) {
    $('.close1').on('click', function(c){
        $('.cart-header').fadeOut('slow', function(c){
            $('.cart-header').remove();
        });
    });
});
$(document).ready(function(c) {
    $('.close2').on('click', function(c){
        $('.cart-header2').fadeOut('slow', function(c){
            $('.cart-header2').remove();
        });
    });
});
jQuery(document).ready(function($){
    $('#etalage').etalage({
        thumb_image_width: 400,
        thumb_image_height: 300,
        source_image_width: 1600,
        source_image_height: 1000,
        show_hint: true,
        click_callback: function(image_anchor, instance_id){
            alert('Callback example:\nYou clicked on an image with the anchor: "'+image_anchor+'"\n(in Etalage instance: "'+instance_id+'")');
        }
    });
})
    $(".scroll").click(function(event){
        event.preventDefault();
        $(".scroll").fadeIn(500);
        $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
    });






