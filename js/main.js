
    
// Dropdown on mouse hover

    // $(document).ready(function () {
    //     function toggleNavbarMethod() {
    //         if ($(window).width() > 992) {
    //             $('.navbar .dropdown').on('mouseover', function () {
    //                 $('.dropdown-toggle', this).trigger('click');
    //             }).on('mouseout', function () {
    //                 $('.dropdown-toggle', this).trigger('click').blur();
    //             });
    //         } else {
    //             $('.navbar .dropdown').off('mouseover').off('mouseout');
    //         }
    //     }
    //     toggleNavbarMethod();
    //     $(window).resize(toggleNavbarMethod);
    // });


    $('.btn-cat-menu').click(function(){
        $('.cat-nav').slideToggle(400)
    })

    $('.dropdown').hover(function(){
        $(this).children('.dropdown-menu').slideToggle(150)
    })





    $(".navbar-toggler").click(function(){
        $('.log-in').slideToggle(300)
    })
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });



    $(".hero-slider").slick({
        arrow:true,
        infinite: true,
        dots:true,
        autoplay: true,
        autoplaySpeed: 1500,

    });



    // $('.partner-carousel').slick({
    //     // dots: true,
    //     arrows:false,
    //     infinite: true,
    //     speed: 300,
    //     slidesToShow: 4,
    //     slidesToScroll: 4,
    //     autoplay: true,
    //     autoplaySpeed: 1000,
    //     responsive: [
    //       {
    //         breakpoint: 1024,
    //         settings: {
    //           slidesToShow: 3,
    //           slidesToScroll: 3,
    //           infinite: true,
    //           dots: true
    //         }
    //       },
    //       {
    //         breakpoint: 600,
    //         settings: {
    //           slidesToShow: 2,
    //           slidesToScroll: 2
    //         }
    //       },
    //       {
    //         breakpoint: 480,
    //         settings: {
    //           slidesToShow: 1,
    //           slidesToScroll: 1
    //         }
    //       }
    //     ]
    // })

    

    


