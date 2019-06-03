$(document).ready(function() {
	
	$('.hamburger, .menu-hidden__item').click(function() {
		if ( $('.menu-hidden').is(':hidden') ) {
			$('.menu-hidden').show();
		} else {
			$('.menu-hidden').hide();
		}
	});
	
}); //end ready