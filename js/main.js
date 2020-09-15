$(function () {
  $('.slider__inner').slick({
    autoplay: true,
    prevArrow: '.prv',
    nextArrow: '.nxt',
  });
  $('.service__slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    arrows: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        }
      },
      {
        breakpoint: 520,
        settings: {
          arrows: false,
        }
      },
    ]
  });
  $('.car__slider').slick({
    slidesToShow: 1,
    arrows: true,
    asNavFor: '.car__nav',
    vertical: true,
    verticalSwiping: true,
    prevArrow: '<button class="slick-arrow slick-prev"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14px" height="9px"><path fill-rule="evenodd" fill="rgba(243, 185, 62, 0.5)" d="M1.023,7.034 C0.762,7.292 0.762,7.723 1.023,7.991 C1.275,8.250 1.694,8.250 1.945,7.991 L6.670,3.136 L7.984,3.136 L12.700,7.991 C12.961,8.250 13.381,8.250 13.632,7.991 C13.893,7.723 13.893,7.292 13.632,7.034 L7.789,1.029 C7.537,0.761 7.118,0.761 6.866,1.029 L1.023,7.034 Z"/></svg></button>',
    nextArrow: '<button class="slick-arrow slick-next"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14px" height="9px"><path fill-rule="evenodd" fill="rgba(243, 185, 62, 0.5)" d="M1.023,1.997 C0.762,1.738 0.762,1.307 1.023,1.039 C1.275,0.781 1.694,0.781 1.945,1.039 L6.670,5.895 L7.984,5.895 L12.700,1.039 C12.961,0.781 13.381,0.781 13.632,1.039 C13.893,1.307 13.893,1.739 13.632,1.997 L7.789,8.002 C7.537,8.270 7.118,8.270 6.866,8.002 L1.023,1.997 Z"/></svg></button>',
    responsive: [
      {
        breakpoint: 1230,
        settings: {
          arrows: false,
        }
      },
    ]
  });
  $('.car__nav').slick({
    slidesToShow: 3,
    asNavFor: '.car__slider',
    centerMode: true,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 490,
        settings: {
          vertical: false,
          verticalSwiping: false,
          centerMode: false,
        }
      },
    ]
  });
  $('.header__menu-btn').on('click', function(){
    $('.header__menu ul').slideToggle();
  });
  wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animate__animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();
});