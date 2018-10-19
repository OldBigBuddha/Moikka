$(() => {
  $("#cookie-banner")
    .fadeIn(2000)
    .animate({
      "bottom": "0"
    }, {
      duration: 1000,
      queue: false
    });

  $("#button-agree").on("click", () => {
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
});