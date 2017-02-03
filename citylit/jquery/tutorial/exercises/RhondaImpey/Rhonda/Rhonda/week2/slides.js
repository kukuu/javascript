$(document).ready(function(){
	var currentPosition = 0;
	var sideWidth = 560;
	var slide = $('.slide');
	var nuberOfSlides = slides.length;

	// Remove scollbar in JS
	$('#slidesContainer').css('overflow', 'hidden');

	// Wrap all .slides with #slideInner div. This is container for just slide boxes
	slides
		.wrapAll('<div id="slideInner"></div>')
		// Float left to display horizontally,
		// readjust .slide width
		.css({
			'float' : 'left',
			'width' : slideWidth
		});

	// Set #slideInner width equal to total width of all slides. The 2 properties
	$('#slideInner').css('width', slideWidth * numberOfSlides);

	// Insert controls in the DOM. Prepend for left navigation and append for right control
  	$('#slideshow')
	    .prepend('<span class="control" id="leftControl">Clicking moves left</span>')
	    .append('<span class="control" id="rightControl">Clicking moves right</span>');
 
  	// Hide left arrow control on first load
  	manageControls(currentPosition);
 
  	// Create event listeners for .controls clicks. Note the continuous use of css classes Here we use the tertiary operator
    $('.control')
   		.bind('click', function(){
    	// Determine new position
		currentPosition = ($(this).attr('id')=='rightControl') ? currentPosition+1 : currentPosition-1;

	}
})