$('a[href*="#"]').click(function(event){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 800);
    event.preventDefault();
});