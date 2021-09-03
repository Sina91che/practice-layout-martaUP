
 $(function(){
    $('.heder-slider').slick({
//   setting-name: setting-value,
      arrows: false,
      vertical: true,
      verticalSwiping: true,
      dots: true,
      dotsClass: 'header-dots',
      autoplay: true,
      
    });
    $('.header-nav-btn').on('click', function(){
        $('.header-nav-list').slideToggle();
    })
});