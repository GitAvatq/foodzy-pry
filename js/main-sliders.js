$(function () {
    $('.menu__sliders').slick({
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinity: false,
        draggable: false,
        arrows: false,
        waitForAnimate: false,
    });

    $('.slide-btn-prev').on('click', function (e) {
        e.preventDefault()
        $('.menu__sliders').slick('slickPrev')
    })
    $('.slide-btn-next').on('click', function (e) {
        e.preventDefault()
        $('.menu__sliders').slick('slickNext')
    })

    $('.list-products').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: false,
        arrows: false,
        draggable: false,
        waitForAnimate: false,
        dots: false,
    });

    $('.product-prev').on('click', function (e) {
        e.preventDefault()
        $('.list-products').slick('slickPrev')
    })
    $('.product-next').on('click', function (e) {
        e.preventDefault()
        $('.list-products').slick('slickNext')
    })

})