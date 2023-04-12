$(function () {
    "use strict";

    $(window).scroll(function () {
        // Background Fixed
        if ($(window).scrollTop() > 120) {
            $(".navbar").addClass('navbar-bg');
            $(".navbar .navbar-nav .nav-link").css('color', '#222');
            $(".navbar .navbar-brand").css('color', '#222');
        } else {
            $(".navbar").removeClass('navbar-bg');
            $(".navbar .navbar-nav .nav-link").css('color', '#FFF');
            $(".navbar .navbar-brand").css('color', '#FFF');
        }
        
        // Sync Navbar Links With Section
        $('.block').each(function () {
            if($(window).scrollTop() > $(this).offset().top) {
            var blockId = $(this).attr('id');
                $('.navbar a').removeClass('active');
                $('.navbar li a[data-scroll = "' + blockId + '"]').addClass('active');
            }
        });
        
        // Show & Hide The Arrow
        if ($(window).scrollTop() > 600) {
            $('.scroll-top').fadeIn(500);
            $('.scroll-top i').css("opacity", 1);
        } else {
            $('.scroll-top').fadeOut(500);
        }
    });

    // Click On arrow-up  To Go Up
    $('.scroll-top').click(function (e){
      e.preventDefault();
      $('html, body').animate({
          scrollTop: 0
      }, 1000);
    });
    
    // Smoothly Scroll To Element
    $('.navbar li a').on('click',function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top + 1
        }, 1200);
    });

    // Add Active Class On Navbar Link And Remove From Siblings
    $(".navbar li a").on('click', function (e){
        e.preventDefault();
        $('.navbar a').removeClass('active');
        $(this).addClass('active');
    });

     // Toggle Settings
    $(".toggle-settings").on("click", function() {
        $(this).find("i").toggleClass("fa-spin");
        $(this).parent().toggleClass("hide-settings");
    });

    // Switch Colors Theme
    var themesClasses = [];

    $(".color-options li").each(function() {
        themesClasses.push($(this).data("theme"));
    });

    $(".color-options li").on("click", function() {
        $(this).addClass("active").siblings().removeClass("active");
        $("body").removeClass(themesClasses.join(" ")).addClass($(this).data("theme"));
    });

    /*  Applic App */
    var client_list = $('.app-active');
    if(client_list.length){
      client_list.owlCarousel({
        slidesToShow: 3,
        slidesToScroll: 1,
        loop: true,
        autoplay:true,
        speed: 3000,
        smartSpeed:2000,
        dots: false,
        margin: 15,
        nav  : false,
        navText : ["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
        autoplayHoverPause: true,
        responsive : {
          0 : {
            items: 1
          },
          768 : {
            items: 2
          },
          992 : {
            items: 2
          },
          1200:{
            items: 4
          }
        }
      });
    }

    
/* 4. Testimonial Active*/
var testimonial = $('.customar-active');
    if(testimonial.length){
      testimonial.owlCarousel({
        slidesToShow: 3,
        slidesToScroll: 1,
        loop: true,
        autoplay:true,
        speed: 3000,
        smartSpeed:2000,
        dots: false,
        margin: 15,
        nav  : false,
        navText : ["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
        autoplayHoverPause: true,
        responsive : {
          0 : {
            items: 1
          },
          768 : {
            items: 2
          },
          992 : {
            items: 2
          },
          1200:{
            items: 3
          }
        }
      });
    }



});