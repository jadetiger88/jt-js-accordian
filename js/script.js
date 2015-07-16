var speed= 500; 
var action = "click"; 

$(document).ready(function() {
	$('li.q').on(action, function() {

		// Slide down the slected answer and slide up the others 
		$(this).next().slideToggle(speed); 
		$(this).next().siblings('li.a').slideUp(); 

        // Rotate the arrow on the seleted answer
		var img = $(this).children('img');
		$('img').not(img).removeClass("rotate"); 
		img.toggleClass('rotate');
	}) 
});