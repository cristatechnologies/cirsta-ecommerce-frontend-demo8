export const slider_settings = {
  dots: true,
  infinite: true,
  // arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "-40px",
  responsive: [
    {
      breakpoint: 880,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 500,
      settings: {
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 320,
      settings: {
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
  // autoplay: true,
  // speed: 8000,
  // autoplaySpeed: 0,
  // pauseOnHover: false,
  // cssEase: 'linear'
};
