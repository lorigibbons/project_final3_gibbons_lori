//START JQUERY CODE
$(document).ready(function () {
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
    //You will see this in the background of the pages
    $.backstretch('http://pre07.deviantart.net/27c6/th/pre/i/2014/234/6/e/sushi_dreams_part_1_and_2_by_ljamal-d7wa14l.jpg');

    //Custom JQuery
    //This code will make paragraph text in about page red on mouseover
    $('.about-container p').mouseover(function () {
        $(this).addClass('onHoverRed');
    });
    $('.about-container p').mouseleave(function () {
        $(this).removeClass('onHoverRed');
    });

    // Custom JQuery
    // On Menu Page, this should add a span with **** upon hover of the h3 elements on specifically the menu page
    $('.menuContainer h3').hover(
        function () {
            $(this).append($('<span> ***</span>'));
        },
        function () {
            $(this).find('span:last').remove();
        }
    );
});

//START JAVASCRIPT CODE
//Custom Javascript Code
//This should flip between two images upon hover of image in header in contact page
var phoneImage = document.getElementById('monsterPhonePic');
var phoneImageWithFood = document.getElementById('monsterPhonePicWithFood');
phoneImage.addEventListener('mouseover', function () {
    phoneImage.className = 'hide';
    phoneImageWithFood.className = 'show';
});
phoneImageWithFood.addEventListener('mouseleave', function () {
    phoneImage.className = 'show';
    phoneImageWithFood.className = 'hide';
});
