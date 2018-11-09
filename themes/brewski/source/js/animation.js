$(() => {
	$(document).on({
		"mouseenter": function(){
			$(this).find('.description').stop().slideDown()
		},
		"mouseleave": function(){
			$(this).find('.description').stop().slideUp()
		}
	}, ".post-module");
	$('#hum-menu').on("click",function() {
		$(this).toggleClass('active');
		if ($(this).hasClass('active')) {
			$('#container').addClass('active');
		} else {
			$('#container').removeClass('active');
		}
	});
});