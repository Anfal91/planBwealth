(function ($) {
  "use strict";

  //when dom is ready

  /*preloader*/
  $(window).on("load", function () {
    $(".cs-loader").fadeOut("slow", function () {
      $(this).remove();
    });
  });

  $(document).ready(function () {
    $(".dropdown").hover(
      function () {
        $(".dropdown-menu", this).fadeToggle("fast");
      },
      function () {
        $(".dropdown-menu", this).fadeToggle("fast");
      }
    );

    /*----------------------------
         wow js active
        ------------------------------ */
    new WOW().init();

    /*----------------------------
        Testimonial  Activation
        ------------------------------ */
    $(".testimonial").owlCarousel({
      items: 2,
      margin: 30,
      loop: true,
      dots: false,
      nav: false,
      smartSpeed: 700,
      autoplay: 5000,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },

        768: {
          items: 2,
        },

        800: {
          items: 2,
        },

        1024: {
          items: 2,
        },
      },
    });

    /*----------------------------
        Testimonial 2 Activation
        ------------------------------ */
    $(".testimonial-2").owlCarousel({
      items: 3,
      margin: 30,
      loop: true,
      dots: false,
      nav: false,
      smartSpeed: 700,
      autoplay: 5000,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },

        768: {
          items: 3,
        },

        800: {
          items: 3,
        },

        1024: {
          items: 3,
        },
      },
    });

    /*----------------------------
        Testimonial 3 Activation
        ------------------------------ */
    $(".testimonial-3").owlCarousel({
      items: 1,
      margin: 30,
      loop: true,
      dots: false,
      nav: false,
      slideSpeed: 2000,
      autoplay: true,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },

        768: {
          items: 1,
        },

        800: {
          items: 1,
        },

        1024: {
          items: 1,
        },
      },
    });

    /*----------------------------
            Brand  Activation
        ------------------------------ */
    $(".brand-active").owlCarousel({
      items: 4,
      margin: 30,
      loop: true,
      dots: false,
      nav: false,
      slideSpeed: 2000,
      autoplay: true,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },

        768: {
          items: 3,
        },

        800: {
          items: 3,
        },

        1024: {
          items: 4,
        },
      },
    });

    // on scroll fixed navbar and back to top btn start
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 55) {
        $("#back-to-top").addClass("reveal");
        $("#header").addClass("navbar-fixed-top");
      } else {
        $("#back-to-top").removeClass("reveal");
        $("#header").removeClass("navbar-fixed-top");
      }
    });

    /*----------------------------
         Revolution slider start
        ------------------------------ */
    var revapi4,
      tpj = jQuery;

    tpj(document).ready(function () {
      if (tpj("#rev_slider_4_1").revolution == undefined) {
        revslider_showDoubleJqueryError("#rev_slider_4_1");
      } else {
        revapi4 = tpj("#rev_slider_4_1")
          .show()
          .revolution({
            sliderType: "standard",
            jsFileLocation:
              "//192.168.0.110/rnd/revslider/wp-content/plugins/revslider/public/assets/js/",
            sliderLayout: "fullwidth",
            dottedOverlay: "none",
            delay: 9000,
            navigation: {
              keyboardNavigation: "off",
              keyboard_direction: "horizontal",
              mouseScrollNavigation: "off",
              mouseScrollReverse: "default",
              onHoverStop: "off",
              arrows: {
                style: "hesperiden",
                enable: true,
                hide_onmobile: false,
                hide_onleave: true,
                hide_delay: 200,
                hide_delay_mobile: 1200,
                tmp: "",
                left: {
                  h_align: "left",
                  v_align: "center",
                  h_offset: 20,
                  v_offset: 0,
                },
                right: {
                  h_align: "right",
                  v_align: "center",
                  h_offset: 20,
                  v_offset: 0,
                },
              },
            },
            responsiveLevels: [1240, 1240, 1240, 480],
            visibilityLevels: [1240, 1240, 1240, 480],
            gridwidth: [1240, 1240, 1240, 480],
            gridheight: [868, 868, 868, 720],
            lazyType: "none",
            shadow: 0,
            spinner: "spinner0",
            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,
            shuffle: "off",
            autoHeight: "off",
            disableProgressBar: "on",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
              simplifyAll: "off",
              nextSlideOnWindowFocus: "off",
              disableFocusListener: false,
            },
          });
      }
    });
    // revolution slider end

    /*---------------------
        portfolio start
        -----------------------*/
    $(window).on("load", function () {
      var $container = $(".portfolio");
      $container.isotope({
        filter: "*",
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
      $(".portfolio-nav li").on("click", function () {
        $(".portfolio-nav li.active").removeClass("active");
        $(this).addClass("active");
        var selector = $(this).attr("data-filter");
        $container.isotope({
          filter: selector,
          animationOptions: {
            duration: 750,
            easing: "linear",
            queue: false,
          },
        });
        return false;
      });
    });

    /*----------------------------
         Lightbox
        ------------------------------ */
    lightbox.option({
      resizeDuration: 700,
      wrapAround: true,
    });

    /*----------------------------
         Chart Active
        ------------------------------ */
    var _gaq = _gaq || [];
    _gaq.push(["_setAccount", "UA-36251023-1"]);
    _gaq.push(["_setDomainName", "jqueryscript.net"]);
    _gaq.push(["_trackPageview"]);

    (function () {
      var ga = document.createElement("script");
      ga.type = "text/javascript";
      ga.async = true;
      ga.src =
        ("https:" == document.location.protocol
          ? "https://ssl"
          : "http://www") + ".google-analytics.com/ga.js";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(ga, s);
    })();

    /*----------------------------
         price-slider active
        ------------------------------ */
    $("#slider-range").slider({
      range: true,
      min: 40,
      max: 600,
      values: [60, 570],
      slide: function (event, ui) {
        $("#amount").val("£" + ui.values[0] + " - £" + ui.values[1]);
      },
    });
    $("#amount").val(
      "£" +
        $("#slider-range").slider("values", 0) +
        " - £" +
        $("#slider-range").slider("values", 1)
    );

    /*--------------------------
         counterup js
        ---------------------------- */
    $(".count").counterUp({
      delay: 50,
      time: 3000,
    });

    /*--------------------------
        scrollUp
        ---------------------------- */
    $.scrollUp({
      scrollText: "",
      easingType: "linear",
      scrollSpeed: 900,
      animation: "fade",
    });
  });
  //dom ready end
})(jQuery);
