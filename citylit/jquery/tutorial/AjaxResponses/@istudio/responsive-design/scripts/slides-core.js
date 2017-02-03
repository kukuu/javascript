$(document).ready(function() { 
					$.get("slides.html", function(data) { 
						var sNav = [ '<ul class="slide-nav">', 
							'<li><a class="prev" href= "#welcome-slides">Previous</a></li>','<li><a class="next" href="#welcome-slides"> Next</a></li>','</ul>' ].join(""); 
					$(".welcome .slides") 
					.append(data) 
					.wrapInner('<div class="slidewrap"><div id="welcome-slides" class="slider"></div></div>') 
					.find(".slidewrap") 
					.append(sNav) 
					.carousel({ slide: '.figure' }); 
				});
			});
