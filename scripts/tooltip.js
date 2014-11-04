$(document).ready(function () {
	// Tooltip only Text
	$('.content .img-wrapper .img-head').hover(function () {
		// Hover over code
		var title = $(this).attr('title');
		$(this).data('tipText', title).removeAttr('title');
		$('<p class="tooltip"></p>')
        .text(title)
        .appendTo('body')
        .fadeIn('slow');
	}, function() {
		// Hover out code
		$(this).attr('title', $(this).data('tipText'));
		$(".tooltip").remove();
	})
});