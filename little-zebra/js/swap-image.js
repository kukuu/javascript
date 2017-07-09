//Author: Alexander Adu-Sarkodie
//Purpose: Processing script for donation's image swap
//Date: July 2017
 function setImage(select){
	var image = document.getElementsByName("image-swap")[0];
	image.src = select.options[select.selectedIndex].value;
 }