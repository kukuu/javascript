var list = document.getElementById('thumbs');
var children = list.children;


for (i = 0 ; i < children.length ; i++){
  children[i].addEventListener("click", showImage);
}

function showImage (e) {
  e.preventDefault();
  document.getElementById('largeImg').src = this.href;
}