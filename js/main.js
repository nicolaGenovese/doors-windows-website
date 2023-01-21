(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });


    // Portfolio isotope and filter
   
    // var portfolioIsotope = $('.portfolio-container').isotope({
    //     itemSelector: '.portfolio-item',
    //     layoutMode: 'fitRows'

    // });
      


    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        // portfolioIsotope.isotope({filter: $(this).data('filter')});
    });

    $(".filter-button1").click(function(){
        $(".portainterna").show();
        $(".portaesterna, .finestra, .altrilavori").hide();
        $('html, body').scrollTop($('html, body').scrollTop() - 1);
      });
      $(".filter-button2").click(function(){
        $(".portaesterna").show();
        $(".portainterna, .finestra, .altrilavori").hide();
        $('html, body').scrollTop($('html, body').scrollTop() - 1);
      });
      $(".filter-button3").click(function(){
        $(".finestra").show();
        $(".portainterna, .portaesterna, .altrilavori").hide();
        $('html, body').scrollTop($('html, body').scrollTop() - 1);
      });
      $(".filter-button4").click(function(){
        $(".altrilavori").show();
        $(".portainterna, .portaesterna, .finestra").hide();
        $('html, body').scrollTop($('html, body').scrollTop() - 1);
      });



      $('.h-100.bg-dark.p-4.p-xl-5').hover(function() {
        $('.display-1.mb-0').css({
          'color': '#9B9B9B',
          'transition': 'color 0.5s ease'
        });
      }, function() {
        $('.display-1.mb-0').css({
          'color': '#000000',
          'transition': 'color 0.5s ease'
        });
      });

 
      $(function() {
        $(window).resize(function() {
          if ($(this).width() < 440) {
            $('.fa-2x').removeClass('fa-2x');
          } else {
            $('.fa-2x').addClass('fa-2x');
          }
        }).resize();
      });
      



})(jQuery);


