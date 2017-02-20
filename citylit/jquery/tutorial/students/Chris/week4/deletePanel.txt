$(document).ready(function(){
		$("h2").append('<em></em>');
		$(".thumbs a").click(function(){
			var largePath = $(this).attr("href");
			var largeAlt = $(this).attr("title");
			
			$("#largeImg").attr({src: largePath, alt: largeAlt});
			$("h2 em").html(largeAlt);
			
			return false;
		});
	});