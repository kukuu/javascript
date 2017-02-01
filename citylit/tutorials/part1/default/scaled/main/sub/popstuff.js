window.onload=prepareLinks;

function prepareLinks() {
var links = document.getElementsByTagName("a");
  for (var i = 0; i < links.length; i++) {
    if (links[i].getAttribute("class")==="popup"){
      links[i].onclick=function(){
        openUp(this.getAttribute("href"));
        return false;
      };
    }
  }
}

function openUp(winUrl) {
  window.open(winUrl, "popup", "width=320, height=480");
}
