jQuery(document).ready(function ($) {
  "use strict";

  $(".Modern-Slider").slick({
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    dots: false,
    fade: true,
    pauseOnDotsHover: true,
    cssEase: "linear",
    // fade:true,
    draggable: false,
    prevArrow: '<button class="PrevArrow"></button>',
    nextArrow: '<button class="NextArrow"></button>',
  });

  $("#nav-toggle").on("click", function (event) {
    event.preventDefault();
    $("#main-nav").toggleClass("open");
  });

  $(".tabgroup > div").hide();
  $(".tabgroup > div:first-of-type").show();
  $(".tabs a").click(function (e) {
    e.preventDefault();
    var $this = $(this),
      tabgroup = "#" + $this.parents(".tabs").data("tabgroup"),
      others = $this.closest("li").siblings().children("a"),
      target = $this.attr("href");
    others.removeClass("active");
    $this.addClass("active");
    $(tabgroup).children("div").hide();
    $(target).show();
  });

  $(".box-video").click(function () {
    $("iframe", this)[0].src += "&amp;autoplay=1";
    $(this).addClass("open");
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: true,
        loop: false,
      },
    },
  });

  var $backToTop = $(".back-to-top");
  $backToTop.hide();

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      $backToTop.fadeIn();
    } else {
      $backToTop.fadeOut();
    }
  });

  $backToTop.on("click", function (e) {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });

  updateNavigation();

  function updateNavigation() {
    var fileName = location.href.split("/").slice(-1);
    var navigationMatch = $('nav a[href="' + '"]');
    navigationMatch.addClass("active-section");
  }

  $(".button a[href*=#]").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      { scrollTop: $($(this).attr("href")).offset().top - 0 },
      500,
      "linear"
    );
  });
});
