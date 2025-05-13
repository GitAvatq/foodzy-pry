$(function () {
    var mixer = mixitup('.bars-list', {
        load: {
            filter: '.section-card-show-up--cake-milk'
        }
    });


    $('.bar-slide-items').on("click", function () {
        $('.bar-slide-items').removeClass('bar-slide-items--active')
        $(this).addClass('bar-slide-items--active')
    })
})
