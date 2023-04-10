$(document).ready(function(){
    $('.slide-on-mobile').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
        mobileFirst: true,
        arrows: true,
        dots: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 992,
                settings: 'unslick'
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });

    $(window).on('resize', function() {
        $('.slide-on-mobile').slick('resize');
    });

    $('.feat-product-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                }
            }
        ]
    });

    $(document).on('click', '.quick-add-to-cart', function(e){
        e.preventDefault();
        data = {
            "quantity": 1,
            "id": $(this).attr('data-varid'),
          }
        jQuery.ajax({
            type: 'POST',
            url: '/cart/add.js',
            data: data,
            dataType: 'json',
            success: function(item) {
                console.log(item)
                $('.cart-toast .toast-body').html(item.title + ' has been added to cart')
                $('.cart-toast').fadeIn(1000, function(){
                    $('.cart-toast').fadeOut(3000, function(){
                  })
                })
                $.getJSON('/cart.js', function(data) {
                    console.log('Cart Object');
                    console.dir(data);
                    $('.header-cart .cart-count').html(data.item_count);
                })
            }
        });
    });

    $('.logo-area .header-logo').hover(
        function () {
           $('.header-container').addClass("hovered");
        }
    );

    $('.logo-area .header-logo').mouseenter(
        function () {
            $('.header-container').addClass("hovered");
        });

    $('#shopify-section-header').mouseleave(function(){
        $('.header-container').removeClass("hovered");
    }).mouseleave();
});