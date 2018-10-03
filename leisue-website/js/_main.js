$('document').ready(function(){
	// AOS
	AOS.init({
	  duration: 1200
	})

	// Mobile Navigation
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
		$('#mobile-nav-box').toggleClass('open-menu');
	});


	// jQuery(function($){
	//     // Cycle plugin
	//     $('.slides').cycle({
	//         fx:     'none',
	//         speed:   1,
	//         timeout: 400
	//     }).cycle("pause");
	//     // Pause & play on hover
	//     $('.slideshow-block').hover(function(){
	//         $(this).find('.slides').addClass('active').cycle('resume');
	//     }, function(){
	//         $(this).find('.slides').removeClass('active').cycle('pause');
	//     });

	// });



	// START Scroll on Section
	// trigger the scroll
	$(window).scroll(); //ensure if you're in current position when page is refreshed
	// Select all links with hashes
	$('a[href*="#"]')
	// Remove links that don't actually link to anything
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function(event) {
	    // On-page links
	    if (
	    	location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
	    	&& 
	    	location.hostname == this.hostname
	    ) {
	    	// Figure out element to scroll to
	    	var target = $(this.hash);
	    	target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	    	// Does a scroll target exist?
	    	if (target.length) {
	        	// Only prevent default if animation is actually gonna happen
	        	event.preventDefault();
	        	$('html, body').animate({
	        		scrollTop: target.offset().top - 0 //MINUS NAVIGATION BAR HEIGHT
	        	}, 500, function() {
		        	// Callback after animation
		        	// Must change focus!
		        	var $target = $(target);
		        	$target.focus();
		        	if ($target.is(":focus")) { // Checking if the target was focused
		        		return false;
		          	} else {
		            	$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
		            	$target.focus(); // Set focus again
		          	};
	       		});
	      	}
	    }
	}); // END Scroll on Section
});



