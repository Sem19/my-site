let btn = document.querySelector('.switch');
let body = document.querySelector('body');
let burger = document.querySelector('.burger');
let nav = document.querySelector('.nav');
const medianav = window.matchMedia('(max-width: 980px)');
let navlink = document.querySelectorAll('.menu-link');

btn.addEventListener('click', function () {
    btn.classList.toggle('active');
    body.classList.toggle('dark');
})

burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    body.classList.toggle('hiden');
})

function navclassdelete(){
    for(let i = 0; i < navlink.length; i++){
        navlink[i].addEventListener('click', function(){
                burger.classList.remove('active');
                nav.classList.remove('active');
            
        })
    }
}

if(medianav.matches) navclassdelete();



const links = document.querySelectorAll('a[href^="#"]');
for(let i = 0; i<links.length; i++){
    let link = links[i];
    link.addEventListener('click', function(e){
        e.preventDefault();
        let href = this.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);

        const topofset = document.querySelector('.menu').offsetHeight;
        const elemPosition = scrollTarget.getBoundingClientRect().top;
        
        const ofsetPos = elemPosition - topofset;

        window.scrollBy({
            top: ofsetPos, 
            behavior: 'smooth'
        })
    })
}


$(document).ready(function () {
    $(".portfolio-slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: "<button type='button' class='slick-prev btn btn-slider'><img src='img/prev.svg' alt='prev'></button>",
        nextArrow: "<button type='button' class='slick-next btn btn-slider active'><img src='img/next.svg' alt='next'></button>",
        responsive: [{
            breakpoint: 1191,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, 
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 501,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            }
        }
        
    ]
    })

    $('.testimomials-sliders').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
    })

    $(".btn-slider").click(function () {
        $(".btn-slider").removeClass("active")
        $(this).addClass("active")
    })

    // tabs
    $(".expiriences-list").on("click", ".expiriences-item:not(.active)", function () {
        $(this)
            .addClass("active")
            .siblings()
            .removeClass("active")
            .closest(".expiriences-wrapper")
            .find(".expiriences-tabs .tab")
            .removeClass("active")
            .eq($(this).index())
            .addClass("active");
    })

    // tags
    $(".tab-tags span").click(function () {
        $(".tab-tags span").removeClass("active")
        $(this).addClass("active")
    })

    // slider-blog

    $(".sliders-blog").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,

        responsive: [{
            breakpoint: 1191,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, 
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 501,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
    })

    // slider-testimonials

    $(".testimonials-sliders").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        // autoplay: true,
        // autoplaySpeed: 2000,

        responsive: [{
            breakpoint: 1191,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, 
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 501,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
    })
});