$(document).ready(function(){
		$(".pane .delete").click(function(){
			$(this).parents(".pane").animate({opacity: 'hide'}, "slow");
		})
	});