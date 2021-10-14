$(document).ready(function () {
    /*------------ MOBILE MENU ------------*/
    $(".navbar-toggler, .navbar-nav ul li a, .close_icon").click(function () {
        $(".navbar-nav").toggleClass("show-menu");
    }); /*------------ STICKY MENU ------------*/
    $(window).scroll(function () {
        var sticky_top = $(window).scrollTop();
        if (sticky_top > 0) {
            $('.header').addClass('sticky_menu');
        } else {
            $('.header').removeClass('sticky_menu');
        }
    }); /*------------ AACTIVE MENU ------------*/ /*------------ SMOOTH SCROLL ------------*/
    var navHeight = $('.header').height();
    var navLink = $('.navbar-nav ul li a');
    navLink.on('click', function () {
        var targetLink = $($.attr(this, 'href')).offset().top;
        var targetPosition = targetLink - navHeight;
        $('html, body').animate({
            scrollTop: targetPosition
        }, 800);
        return false;
    }); /*------------ ISOTOPE PLUGIN ------------*/ /*------------ PORTFOLIO FILTER PLUGIN ------------*/
    var $grid = $('.mix-filter').isotope({});
    $(".filter-btn").on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });
    $(".filter-btn button").click(function () {
        $(".filter-btn button").removeClass("active-filter-btn");
        $(this).addClass("active-filter-btn");
    }); /*------------ SWIPER SLIDER ------------*/
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        }
    }); /*------------ BACK TO TOP BUTTON ------------*/
    var mybutton = $("#scroll-btn"); /* When the user scrolls down 200px from the top of the document, show the button */
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if ($(window).scrollTop() > 100) {
            mybutton.css('opacity', 1);
        } else {
            mybutton.css('opacity', 0);
        }
    }
    mybutton.on('click', function () {
        /* When the user clicks on the button, scroll to the top of the document */
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    }); /*------------ WOW JS ------------*/
    new WOW().init();
}); /*------------ HIGHLIGHT NAV MENU ON SCROLL ------------*/
var sections = document.querySelectorAll('section');
var navLink = document.querySelectorAll('.navbar-nav ul li a');
window.addEventListener('scroll', function () {
    var current = '';
    var currentL = '';
    sections.forEach(section => {
        var scrollPosition = section.offsetTop;
        var scrollheight = section.clientHeight;
        if (pageYOffset >= (scrollPosition - scrollheight / 3)) {
            current = section.getAttribute('id');
            currentL = "#" + current;
        }
    });
    navLink.forEach(el => {
        el.classList.remove('active');
        var min = el.getAttribute('href');
        if (min == currentL) {
            el.classList.add('active');
        }
    });
});
