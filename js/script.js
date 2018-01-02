$(document).ready(function(){
    $('#scrolldown-btn').click(function(){
       $('html, body').animate({
        scrollTop: $("#history").offset().top
        }, 1000);
    });
});