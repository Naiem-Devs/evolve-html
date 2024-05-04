(function($) {
  "use strict";



  // owlCarousel
  $(".Tutors__slider").owlCarousel({
    loop: true,
    margin: 20,
    navText: [
      '<i ><img src="assets/img/Arrow-left.png" alt=""></i>',
      '<i ><img src="assets/img/Arrow-right.png" alt=""></i>'
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      992: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  });


  // page Animation
  AOS.init({
    mirror: true,
    duration: 1500,
    initClassName: 'aos-init',
    once: true,
  });

  // data-aos="fade-up" 
  // data-aos-delay="300" 

 
})(jQuery);
