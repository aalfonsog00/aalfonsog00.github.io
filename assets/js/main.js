/*
	Solid State by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$banner = $('#banner');

	// Breakpoints.
		breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight(),
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

	// Menu.
	document.addEventListener('DOMContentLoaded', function() {
		const navLinks = document.querySelectorAll('#main-nav .nav-links a');
		const menuToggle = document.querySelector('.menu-toggle');
		const navLinksContainer = document.querySelector('#main-nav .nav-links');
	
		// Smooth scrolling for nav links
		navLinks.forEach(link => {
			link.addEventListener('click', function(e) {
				e.preventDefault();
				const targetId = this.getAttribute('href');
				const targetSection = document.querySelector(targetId);
				const headerHeight = document.getElementById('header').offsetHeight;
				
				window.scrollTo({
					top: targetSection.offsetTop - headerHeight,
					behavior: 'smooth'
				});
	
				// Close the mobile menu after clicking a link
				navLinksContainer.classList.remove('active');
			});
		});
	
		// Toggle menu functionality
		menuToggle.addEventListener('click', function() {
			navLinksContainer.classList.toggle('active');
		});
	});
	
	

	



		$body
			.on('click', 'a[href="#menu"]', function(event) {

				event.stopPropagation();
				event.preventDefault();

				// Toggle.
					$menu._toggle();

			})
			.on('keydown', function(event) {

				// Hide on escape.
					if (event.keyCode == 27)
						$menu._hide();

			});

})(jQuery);