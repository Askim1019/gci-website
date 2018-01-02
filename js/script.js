$(document).ready(function(){
    $('#scrolldown-btn1').click(function(){
       $('html, body').animate({
        scrollTop: $("#history").offset().top
        }, 1000);
    });
    
    $('#scrolldown-btn2').click(function(){
       $('html, body').animate({
           scrollTop: $('#servicediv').offset().top
        }, 1000);
    });
    
});