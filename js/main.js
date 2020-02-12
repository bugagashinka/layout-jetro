$(function() {
  // Big slider
  $(".slider__gallery").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $(".prev-arrow"),
    nextArrow: $(".next-arrow"),
    asNavFor: ".slider-nav"
  });

  // Thumbnail slider
  $(".slider-nav").slick({
    slidesToShow: 6,
    asNavFor: ".slider__gallery",
    centerPadding: "0px",
    focusOnSelect: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });

  // Main menu events handlers
  $(".header__menu").click(function() {
    const mainMenu = $(".header__nav");
    mainMenu.slideToggle();
  });
});
