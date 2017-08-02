//JQuery Code Start
$(document).ready(function() {
    //Top to Bottom Plugin, Elevator
    //http://www.jqueryscript.net/animation/jQuery-Plugin-For-Scroll-To-Top-Bottom-Buttons-elevator.html
    $.elevator({
        show_top: true,
        show_bottom: true,
        margin: 100,
        speed: 1000,
        glass: false
    });






    //ToolTip Plugin
    //One of the required two to use
    $('.tooltip').tooltipster({
        animation: 'swing',
        maxWidth: 180
    });




    //Backstretch Plugin
    //Second of the two required to use
    $('#background-image').backstretch('http://dl.dropbox.com/u/515046/www/garfield-interior.jpg');



    //Custom JQuery
    //This code will make paragraph text in about page red on mouseover
    $('#test').mouseover(function() {
        $('h3').addClass('onHoverRed');
    });
    $('#test').mouseleave(function() {
        $('h3').removeClass('onHoverRed');
    });




    // Custom JQuery
    // On Menu Page, this should add a span with **** upon hover of the h3 elements on specifically the menu page
    $('article.h3').hover(
        function(
             $( 'h3' ).append( $( "<span> ***</span>" ) );
        ) {},
        function(
             $( 'h3' ).find( "span:last" ).remove();
        ) {}
    );
});

//Custom Javascript Code
//This should flip between two images upon hover of image in header in contact page
var phoneImage = document.getElementById('monsterPhonePic');
var phoneImageWithFood = document.getElementById('monsterPhonePicWithFood');
phoneImage.addEventListener('mouseover', function() {
    phoneImage.className = 'hide';
    phoneImageWithFood.className = 'show';
});
phoneImageWithFood.addEventListener('mouseleave', function () {
    phoneImage.className = 'show';
    phoneImageWithFood.className = 'hide';
});
