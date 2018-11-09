$(() => {
	if (document.cookie.split(';').filter((item) => item.includes("privacypolicy=")).length) {}
	else {
		$("#cookie-banner")
		.css("display", "block")
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
			$("#cookie-banner").slideUp()
		});
	}
});