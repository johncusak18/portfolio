$(document).ready(function () {

	$("#owl-demo").owlCarousel({
		autoPlay: false,
		stopOnHover: false,
		navigation: false,
		mouseDrag: true,
		touchDrag: true,
		singleItem: true,
		pagination: false,
		transitionStyle: "fade"
	});

});
$(document).ready(function () {
	$(".fancybox-button").fancybox({
		prevEffect: 'none',
		nextEffect: 'none',
		closeBtn: false,
		helpers: {
			title: { type: 'inside' },
			buttons: {}
		}
	});
});
$(document).ready(function () {
	$(".various").fancybox({
		maxWidth: 800,
		maxHeight: 600,
		fitToView: false,
		width: '70%',
		height: '70%',
		autoSize: false,
		closeClick: false,
		openEffect: 'none',
		closeEffect: 'none'
	});
});
$(document).click(function (e) {
	if (menuVisible) {
		menuVisible = false;
		$(' .mobile-menu-dropdown').hide();
	}
});

$('.mobile-menu-button').click(function (e) {
	menuVisible = true;
	e.preventDefault();
	e.stopPropagation();
	$('.mobile-menu-dropdown').toggle();

});