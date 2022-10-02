'use strict';

document.addEventListener("DOMContentLoaded", function() {

	//----------------------HAMBURGER-----------------------
		const hamburger = (hamburgerButton, hamburgerNav, hamburgerHeader) => {
			const button = document.querySelector(hamburgerButton),
						nav = document.querySelector(hamburgerNav),
						header = document.querySelector(hamburgerHeader);
	
			button.addEventListener('click', (e) => {
				button.classList.toggle('hamburger--active');
				nav.classList.toggle('header__nav--active');
				header.classList.toggle('header--menu');
			});
	
		};
		hamburger('.hamburger', '.header__nav', '.header');

});

var wow = new WOW(
	{
		boxClass: 'wow',      // animated element css class (default is wow)
		animateClass: 'animated', // animation css class (default is animated)
		offset: 0,          // distance to the element when triggering the animation (default is 0)
		mobile: false,       // trigger animations on mobile devices (default is true)
		live: true,       // act on asynchronously loaded content (default is true)
		callback: function (box) {
			// the callback is fired every time an animation is started
			// the argument that is passed in is the DOM node being animated
		},
		scrollContainer: null // optional scroll container selector, otherwise use window
	}
);
wow.init();
