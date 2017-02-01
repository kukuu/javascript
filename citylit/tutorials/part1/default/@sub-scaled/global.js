function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}

function moveSlideshow(elementID,final_x,final_y,interval) {
    if (!document.getElementById) return false;
    
    // if the element does not exist we have nothing to do
    if (!document.getElementById(elementID)) return false;
    var elem = document.getElementById(elementID);
    
    // the slideshow events stack up and the animation is not smooth anymore
    if (elem.movement) {
        clearTimeout(elem.movement);
    }
    
    // current slideshow position
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if (xpos == final_x && ypos == final_y) {
        return true;
    }
    
    // restrict moving to white area
    if (final_x <= -elem.max_x) {
        final_x = -elem.max_x;
    }
	
    if (final_x > 0) {
	    final_x = 0;
    }
    
    // animation bit (taken from the book DOM Scripting by Jeremy Keith)
    if (xpos < final_x) {
        var dist = Math.ceil((final_x - xpos)/10);
        xpos = xpos + dist;
    }
    if (xpos > final_x) {
        var dist = Math.ceil((xpos - final_x)/10);
        xpos = xpos - dist;
    }
  
    // again, restrict showing white area
    if (xpos <= -elem.max_x) {
	    xpos = -elem.max_x;
    }
    if (xpos > 0) {
	    xpos = 0;
    }
    
    // fix the elements position
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    
    // and set up the event again after an interval
    var repeat = "moveSlideshow('"+elementID+"',"+final_x+","+final_y+","+interval+")";
    elem.movement = setTimeout(repeat,interval);
}

function prepareSlideshow() {
	// first lets make sure the browser understands the DOM methods we will be using
  	if (!document.getElementsByTagName) return false;
  	if (!document.getElementById) return false;
  	
	// Make sure the elements exist
  	if (!document.getElementById("slideshow")) return false;
  	var slideshow = document.getElementById("slideshow");
  	var wrapper = document.getElementById("slideshow_wrapper");
  	wrapper.style.overflow = "hidden";
  	
  	// prepare the navigation bit we will be using
  	// left
  	var navigation = document.createElement("ul");
  	navigation.setAttribute("id", "navigation");
  	var li = document.createElement("li");
  	var scroll_left = document.createElement("a");
  	scroll_left.setAttribute("id", "scroll_left");
  	scroll_left.href ="#";
  	var text = document.createTextNode("Left");
  	scroll_left.appendChild(text);
  	li.appendChild(scroll_left);
  	navigation.appendChild(li);
  	slideshow.insertBefore(navigation, wrapper);
  	
  	//right
  	var li = document.createElement("li");
  	var scroll_right = document.createElement("a");
  	scroll_right.setAttribute("id", "scroll_right");
  	scroll_right.href ="#";
  	var text = document.createTextNode("Right");
  	scroll_right.appendChild(text);
  	li.appendChild(scroll_right);
  	navigation.appendChild(li);
  	slideshow.insertBefore(navigation, wrapper);
	
	var slideshow_set = document.getElementById("slideshow_set");
	slideshow_set.style.top = 0+"px";
	slideshow_set.style.left = 0+"px";
	
	// to get the max y position of the gallery image track we need to count all
	// the li items and multiply that number with 130
	var li = slideshow_set.getElementsByTagName("li");
	slideshow_set.max_x = (li.length-1) * 200;
	slideshow_set.max_y = li.length * 130;
	
	// need the width of the gallery so that they do not scroll vertical
	var width = li.length * 200;
	slideshow_set.style.width = width + "px";
	
	// Attach onmouseover event for left
  	scroll_left.onclick = function() {
		// get the current position of the gallery element
		var slideshow_set = document.getElementById("slideshow_set");
		var x = parseInt(slideshow_set.style.left);
		if (x % 200 == 0) {
    		moveSlideshow("slideshow_set",x+200,0,10);
		}
		return false;
	}
	
	// Attach onmouseover event for right
  	scroll_right.onclick = function() {
		// get the current position of the gallery element
		var slideshow_set = document.getElementById("slideshow_set");
		var x = parseInt(slideshow_set.style.left);
    	if (x % 200 == 0) {
    		moveSlideshow("slideshow_set",x-200,0,10);
		}
		return false;
	}
}
addLoadEvent(prepareSlideshow);