/* Создание бургер меню */

let burger = document.getElementById('burger')
let click = document.getElementById('burger__onclick')
let cross = document.getElementById('cross__button')
let menu = document.getElementById('menu')
cross.onclick = function () {
    menu.style.display = 'none'
    burger.style.display = 'block'
    click.style.display = 'none'
}
burger.onclick = function () {
    burger.style.display = 'none'
    click.style.display = 'block'
    menu.style.display = 'block'
} 
click.onclick = function () {
    click.style.display = 'none'
    burger.style.display = 'block'
    menu.style.display = 'none'
}

    /* Подключение слайдера */

$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        easing: 'linear',
        infinite: true,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 1500,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: true,
        swipe: true,
        touchThreshold: 15,
        touhMove: true,
        waitForAnimate: true,
        centerMode: false,
        variableWidth: true,
    });
});

// /* Подключение стрелочки */
let strelochka = document.getElementById('strelochka')
let kek = $(window).scrollTop()
let lol = $(".block__contacts").innerHeight() + $('.footer').innerHeight()
$(strelochka).on('click', function () {
    let contacts = $('.block__contacts').offset().top;
    $('html, body').animate({
        scrollTop:(contacts)
    })
})

