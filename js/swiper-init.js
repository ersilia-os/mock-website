var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    // spaceBetween: 30,
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        769: {
            slidesPerView: 3,
        },
        1025: {
            slidesPerView:5,
        },
    }
});

// swiper.on('slideChange', function (e) {
//     if (e.activeIndex !== 0)
//         $("#slider-container").removeClass("container-lg").addClass("container-fluid");
//     else
//         $("#slider-container").removeClass("container-fluid").addClass("container-lg");
// });