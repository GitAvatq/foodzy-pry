$(function () {
    var mixer = mixitup('.popular-products-list');

    $('.heading-filer-btn').on('click', function () {
        $('.heading-filer-btn').removeClass('heading-filer-btn--active')
        $(this).addClass('heading-filer-btn--active')
    })
})