// event delegation

var setup = function()
{
	// just get our stuff
	var one = document.getElementById("collapse_one");
	var two = document.getElementById("collapse_two");
		one.className = "dynamic";
		two.className = "dynamic";
	
	// start traditional event handlers
	function toggle(el) {
		var ul = el.parentNode.getElementsByTagName('ul')[0];
		if (ul.style.display == 'none' || ul.style.display == ''){
			ul.style.display = 'block';
		} else {
			ul.style.display = 'none';
		}
		return false;
	};
	var uls = one.getElementsByTagName("ul");
	for (var i=0; i<uls.length; i++){
		var parentLink = uls[i].parentNode.getElementsByTagName('a')[0];
			parentLink.onclick = function(){
				return toggle(this);
			};
	};
	// end traditional event handlers
	
	// start event delegation
	var uls = two.getElementsByTagName("ul");
	two.onclick = function(e){
		var t = getTarget(e); // delegate!!
		if (t.nodeName.toLowerCase() === 'a' && t.parentNode.getElementsByTagName('ul').length > 0) {
			var ul = t.parentNode.getElementsByTagName('ul')[0];
			if (ul.style.display == 'none' || ul.style.display == ''){
				ul.style.display = 'block';
			} else {
				ul.style.display = 'none';
			}
			return false;
		};
	};
	
	function getTarget(x){ // here's the magic, really simple stuff
		x = x || window.event;
		return x.target || x.srcElement;
	}
	// end event delegation
	
	// general utilities
	function addElements(){
			var extraHTML = ['<li><a href="#">New Item</a><ul>' ,
				'<li><a href="#">Sub Item 1</a><li><a href="#">Sub Item 2</a>' ,
				'<li><a href="#">Sub Item 3</a><li><a href="#">Sub Item 4</a>' ,
				'<li><a href="#">Sub Item 5</a><li><a href="#">Sub Item 6</a>' ,
				'</li></ul></li>'].join('');
				one.innerHTML += extraHTML;
				two.innerHTML += extraHTML;
		}
	// using, gasp! event handler
	document.getElementById("myButton").onclick = addElements;
};

window.onload = setup;
