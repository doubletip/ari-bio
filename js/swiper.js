var swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  
  $(".swiper-play").hide();

  $(".swiper-pause").click(function(){
    swiper.autoplay.stop();
    $(this).hide();
    $(".swiper-play").show();
  });
  $(".swiper-play").click(function(){
    swiper.autoplay.start();
    $(this).hide();
    $(".swiper-pause").show();
  });
