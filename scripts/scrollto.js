var scrollto = function () {


	$(".slide-one .hero-icon-container .hero-icon").click(function () {
		$('html,body').animate({
			scrollTop: $(".scrollhere").offset().top
		},
			{
				duration: 1900,
				easing: 'easeInOutCubic'
			}
			);
	});
};