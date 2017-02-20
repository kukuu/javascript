$(window).load(function(){
	$(document).ready(function(){
	var data = '[{"image":"http:\/\/www.goldhawk-college.com\/istudio\/type-1\/images\/thumbnails\/oxo-tower-london-1.jpg"},{"image":"http:\/\/www.goldhawk-college.com\/istudio\/type-1\/images\/thumbnails\/oxo-tower-london-1.jpg"},{"image":"http:\/\/www.goldhawk-college.com\/istudio\/type-1\/images\/thumbnails\/oxo-tower-london-1.jpg"},{"image":"http:\/\/www.goldhawk-college.com\/istudio\/type-1\/images\/thumbnails\/oxo-tower-london-1.jpg"},{"image":"http:\/\/www.goldhawk-college.com\/istudio\/type-1\/images\/thumbnails\/oxo-tower-london-1.jpg"}]';
	var obj = $.parseJSON(data);
	$.each(obj, function(index, item) {$('#imagewrap').append('<img class="lazy images" src="'+item.image+'" />');
		});
	});
});