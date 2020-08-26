$(window).bind("load", function() {
	var anime = $(".sections .container").children();
	var buttons = $(".sections .container").find(".social-btn-box");
	var $window = $(window);

	function in_view() {
		var window_height = $window.height();
		var window_top_position = $window.scrollTop();
		var window_bottom_position = (window_top_position + window_height);

		$.each(anime, function() {
			var element = $(this);
			var element_height = element.outerHeight();
			var element_top_position = element.offset().top;
			var element_bottom_position = (element_top_position + element_height);

			if((window_bottom_position >= element_top_position) && (element_bottom_position >= window_top_position)){
				element.addClass('show');
			}
		});

		$.each(buttons, function() {
			var el =  $(this);
			var el_height = el.outerHeight();
			var el_top_position = el.offset().top;
			var el_bottom_position = (el_top_position + el_height);

			if((window_bottom_position >= el_top_position) && (el_bottom_position >= window_top_position)){
				el.addClass('reveal');
			}
		});
	}

	$window.on('scroll resize', in_view);
	$window.trigger('scroll');
});