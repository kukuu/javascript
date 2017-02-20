window.onload = prepareLinks;
function prepareLinks(){
	var links = document.getElementsByTagName('a');
	for (var i=0; i < links.length ; i++) {
		if(links[i].getAttribute("class")=="popup"){
			links[i].onclick=function(){
				pop(this.getAttribute("href")); return false;
			}
		}
	}
}
function pop(winURL){
	window.open(winURL,"popup","width=320,height=480")
}