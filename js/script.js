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
    
    $('#scrolldown-btn3').click(function(){
       $('html, body').animate({
           scrollTop: $('#products').offset().top
        }, 1000);
    });
    
    $('#scrolldown-btn4').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });

     $('#scrolldown-btn5').click(function(){
       $('html, body').animate({
           scrollTop: $('.logo-container').offset().top
        }, 1000);
    });
    
});