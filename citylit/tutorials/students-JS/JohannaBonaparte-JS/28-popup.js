window.onload = prepareLinks;

function prepareLinks() {
	var links = document.getElementsByTagName ("a");
	//loop
	for (var i=0;i<links.length;i++) {
		if(links[i].getAttribute("class") == "popup"){
			links[i].onclick = function(){
				up(this.getAttribute("href"));
				return false;
			}
		}
	}
}

function up(winURL){
	window.open(winURL, "popup", "width=400, height=400");
}