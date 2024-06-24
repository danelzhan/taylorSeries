var timelineSwiper = new Swiper ('#timeline #swiper_container', {
  direction: 'vertical',
  loop: false,
  speed: 1600,
  pagination: '#swiper_pagination',
  paginationBulletRender: function (swiper, index, className) {
    var year = document.querySelectorAll('.swiper_slide')[index].getAttribute('data-year');
    return '<span class="' + className + '">' + year + '</span>';
  },
  paginationClickable: true,
  nextButton: '#swiper_button_next',
  prevButton: '#swiper_button_prev',
  breakpoints: {
    768: {
      direction: 'horizontal',
    }
  }
});