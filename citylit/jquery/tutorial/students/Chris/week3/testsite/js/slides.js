$(document).ready(function(){
	var currentPosition = 0;
	var slideWidth = 560;
	var slides = $('.slide');
	var numberOfSlides = slides.length;
	
	// Remove scrollbar in JS
	$('#slidesContainer').css('overflow', 'hidden');
	
	// Wrap all .slides with #sliderInner div This is a container for just slide boxes
	slides
		.wrapAll('<div id="slideInner"></div>')
		// Float left to display horizontally, read just .slide width
		.css({
			'float' : 'left',
			'width' : slideWidth
		});
	
	// Set #sliderInner width equal to total width of all slides.
	$('#slideInner').css('width', slideWidth * numberOfSlides);
	
	// Insert controls in the DOM. Prepend for left navigation and append for right control
	$('#slideshow')
		.prepend('<span class="control" id="leftControl">Clicking moves left</span>')
		.append('<span class="control" id="rightControl">Clicking moves right</span>');
	
	// manageControls: Hides and shows controls depending on currentPosition. At both extreme positions the arrows are hidden using tertiary operators
	function manageControls(position) {
		// Hide left arrow if position is first slide
		if(position==0) { $('#leftControl').hide() } else{ $('#leftControl').show() }
		// Hide right arrow if position is last slide
		if(position==numberOfSlides-1){ $('#rightControl').hide() } else{
			$('#rightControl').show()
		}
	}
	// Hide left arrow control on first load
	manageControls(currentPosition);
	
	// Create event listerns for .controls clicks. Note the contrinuous use of CSS classes. Here we use the tertiary operator
	$('.control')
		.bind('click', function(){
			// Determine new position
			currentPosition = ($(this).attr('id')=='rightControl') ? currentPosition+1 : currentPosition-1;
			
			// Hide / show controls. Here currentPosition is used as argument for manageControls
			manageControls(currentPosition);
			// Move slideInner using margin-left
			$('#slideInner').animate({
				'marginLeft' : slideWidth*(-currentPosition)
			});
		});
	
});