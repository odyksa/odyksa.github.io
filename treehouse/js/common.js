$(document).ready(function() {

	// show/hide mobile-menu
	
	$('.nav-hamburger, .nav__item a').click(function() {
		if ($('#nav').hasClass('mobile-menu')) {
			$('#nav').removeClass('mobile-menu');
		} else {
			$('#nav').addClass('mobile-menu');
		}
	});	//end click	


}); //end ready