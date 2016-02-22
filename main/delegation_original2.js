// event delegation

var setup = function()
{
	//just get our stuff

		var two = document.getElementById("collapse_two");
			two.className = "dynamic";
	//start event delegation
	var uls = two.getElementsByTagName("ul");
	two.onclick = function(e){
		var t = getTarget(e); //delegate!   -  
		if (t.nodeName.toLowerCase() === 'a' && t.parentNode.getElementsByTagName('ul').length > 0) { //if the target is a link AND it's parent is a UL element
			var ul = t.parentNode.getElementsByTagName('ul') [0];
			if (ul.style.display == 'none' || ul.style.display == ''){
				ul.style.display = 'block';
				} else {
					ul.style.display = 'none';
				}
				return false;
			};
	};
	function getTarget(x){ //This is the magic bit!!!!! this gives the target variable the actual target value
		x = x || window.event;
		return x.target || x.srcElement;  //syntax for IE - OR - sytnax for other browsers - 
	}
	//end of event delegation
	
	//general utilities
	function addElements(){
		var extraHTML = ['Tony <br />'].join('');

				two.innerHTML += extraHTML;
	}
	//using event handler
	//document.getElementByID("myButton").onclick = addElements;  //Notice the Id in GetElementById is uppercase on this line.
	document.getElementById("myButton").onclick = addElements;
};

window.onload = setup;