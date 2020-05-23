import ScrollReveal from 'scrollreveal/dist/scrollreveal';

const initPage = $ => {
  // Start of use strict

  // Smooth scrolling using jQuery easing
  // eslint-disable-next-line consistent-return
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(() => {
    // eslint-disable-next-line eqeqeq
    if (window.location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && window.location.hostname == this.hostname){
      let target = $(this.hash);
      target = target.length ? target : $(`[name=${this.hash.slice(1)}]`);
      if (target.length){
        $('html, body').animate({
          scrollTop: (target.offset().top - 56),
        }, 1000, 'easeInOutExpo');
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(() => {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57,
  });

  // Collapse Navbar
  const navbarCollapse = () => {
    if ($('#mainNav').offset().top > 100) {
      $('#mainNav').addClass('navbar-shrink');
    } else {
      $('#mainNav').removeClass('navbar-shrink');
    }
  };

  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Scroll reveal calls
  const sr = ScrollReveal();
  window.sr = sr;

  sr.reveal('.sr-icon-1', {
    delay: 200,
    scale: 0,
  });
  sr.reveal('.sr-icon-2', {
    delay: 400,
    scale: 0,
  });
  sr.reveal('.sr-icon-3', {
    delay: 600,
    scale: 0,
  });
  sr.reveal('.sr-icon-4', {
    delay: 800,
    scale: 0,
  });
  sr.reveal('.sr-button', {
    delay: 200,
    distance: '15px',
    origin: 'bottom',
    scale: 0.8,
  });
  sr.reveal('.sr-contact-1', {
    delay: 200,
    scale: 0,
  });
  sr.reveal('.sr-contact-2', {
    delay: 400,
    scale: 0,
  });
};

initPage(window.jQuery);
