$(() => {
  if (document.cookie.split(';').filter((item) => item.includes("privacypolicy=")).length) {}
  else {
    $("#cookie-banner")
    .css("display", "flex")
    .hide()
    .fadeIn(1500)
    .animate({
      "bottom": "0",
    }, {
      duration: 1500,
      queue: false
    });

    $("#button-agree").on("click", () => {
      let deadline = new Date();
      deadline.setTime( deadline.getTime + 30*24*60*60*1000 );
      document.cookie = "privacypolicy=agree;expires=" + deadline.toGMTString();

      $("#cookie-banner")
        .fadeOut(2000)
        .animate({
          "bottom": "-80",
          "display": "none"
        }, {
          duration: 1000,
          queue: false
        });
    });
  }
  $(document).on({
    "mouseenter": function(){
      $(this).find('.description').stop().slideToggle()
    },
    "mouseleave": function(){
      $(this).find('.description').stop().slideToggle()
    }
  }, ".post-module");
  
  $('#hum-menu').click(function() {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $('#container').addClass('active');
    } else {
      $('#container').removeClass('active');
    }
  });
});