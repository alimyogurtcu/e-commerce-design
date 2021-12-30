import '../../node_modules/less/dist/less.js'
import '../../node_modules/jquery/dist/jquery.slim.js'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import '../../node_modules/@fortawesome/fontawesome-free/js/solid.js'
import '../../node_modules/@fortawesome/fontawesome-free/js/brands.js'
import '../../node_modules/@fortawesome/fontawesome-free/js/fontawesome.js'
import '../assets/scripts/owl.carousel.min.js'
import '../assets/scripts/placeholderTypewriter.js'

// Links preventDefault
$('a').click(function (e) {
    e.preventDefault();
});

// Owl Carousel Options
var owlCarouselOptionOne = {
    items: 1,
    loop: true,
    margin: 10,
    lazyLoad: true,
    nav: true,
    navText: ["<i class='fa fa-angle-double-left fa-2x'></i>", "<i class='fa fa-angle-double-right fa-2x'></i>"],
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
};

var owlCarouselOptionTwo = {
    items: 2,
    loop: true,
    margin: 10,
    lazyLoad: true,
    nav: true,
    navText: ["<i class='fa fa-angle-double-left fa-2x'></i>", "<i class='fa fa-angle-double-right fa-2x'></i>"],
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
};

var owlCarouselOptionThree = {
    items: 1,
    loop: false,
    margin: 10,
    lazyLoad: true,
    nav: true,
    navText: ["<i class='fa fa-angle-double-left fa-2x'></i>", "<i class='fa fa-angle-double-right fa-2x'></i>"],
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
};

// Owl Carousels
var owlOne = $('.owl-one'); // Home Page 1 (left)
owlOne.owlCarousel(owlCarouselOptionOne);

var owlTwo = $('.owl-two'); // Home Page 2 (right-top)
owlTwo.owlCarousel(owlCarouselOptionOne);

var owlThree = $('.owl-three'); // Home Page 3 (right-bottom)
owlThree.owlCarousel(owlCarouselOptionTwo);

var owlFour = $('.owl-four'); // Computers Page
owlFour.owlCarousel(owlCarouselOptionOne);

var owlFive = $('.owl-five'); // Computer Page
owlFive.owlCarousel(owlCarouselOptionThree);

// Title blur/focus change
var oldTitle = document.title;
$(window).blur(function () {
    document.title = 'Bizi Unutmayın..';
});
$(window).focus(function () {
    document.title = oldTitle;
});

// Search input placeholder type writter
var placeholderText = [
    "Anahtar kelime..",
    "Marka..",
    "Model.."
];

// Search input typewriting effect
$('.searchInput').placeholderTypewriter({
    text: placeholderText
});