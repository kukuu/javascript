window.onload = prepareLinks;
function prepareLinks() {
	var links = document.getElementsByTagName ("a");
	// create a loop function with a for
	for( var i=0; i<links.length; i++) {
		if (links[i].getAttribute("class")=="popup") {
			links[i].onclick = function() {
				up(this.getAttribute("href"));
				return false;
			}
		}
	}
}
function up(winURL) {
	window.open(winURL, "popup", "width=600, height=480");
}