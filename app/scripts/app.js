(function(document) {
	'use strict';

	var app = document.getElementById('app');

	app.addEventListener('dom-change', function() {
		// our app is ready to rock
	});

	window.addEventListener('WebComponentsReady', function() {
		// imports are loaded and elements have been registered
	});
})(document);
