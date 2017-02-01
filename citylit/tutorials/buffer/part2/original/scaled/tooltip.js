// Alexander Adu-Sarkodie - May 2008
//Read comment

// set DHTML to true if Browser supports it
var DHTML = (document.layers || document.all || (parseInt(navigator.appVersion) >= 5)) ? true : false;
// set DOM to TRUE if we can use a W3C DOM model .
var DOM = (parseInt(navigator.appVersion) >= 5 || navigator.appVersion.indexOf("MSIE 5") != -1) ? true : false;
var dhtmlPrefix = "";
var styleSuffix = "";



// how to manipulate a dhtml element
dhtmlPrefix = document.layers ? "document.layers[" : "document.all[";
dhtmlPrefix = DOM ? "document.getElementById(" : dhtmlPrefix;
styleSuffix = document.layers ? "]" : "].style";
styleSuffix = DOM ? ").style" : styleSuffix;
dhtmlpagePosX = document.layers ? ".pageX" : ".left";
dhtmlpagePosY = document.layers ? ".pageY" : ".top";
dhtmlrelativePosX = document.layers ? ".left" : ".left";
dhtmlrelativePosY = document.layers ? ".top" : ".top";
var hideValue = document.layers ? "hide" : "hidden";
var showValue = document.layers ? "show" : "visible";


function showElement(element){
	if (DHTML){
		eval("styleObj = " + dhtmlPrefix + "element" + styleSuffix);
		styleObj.visibility = showValue;
		//setTimeout(element,450)
	}
}

function hideElement(element){
	if (DHTML){
		eval("styleObj = " + dhtmlPrefix + "element" + styleSuffix);
		styleObj.visibility = hideValue;
	}
}

function positionElement( element, Xpos , Ypos ){
	if (DHTML){
		eval("styleObj = " + dhtmlPrefix + "element" + styleSuffix + dhtmlpagePosX + "=" + Xpos);
		eval("styleObj = " + dhtmlPrefix + "element" + styleSuffix + dhtmlpagePosY + "=" + Ypos);
	}
}


function NEWpositionElement( element, Xpos , Ypos , relative ){
	if (DHTML){
	var relative = (relative == true || relative == "relative") ? true : false ;
		if (relative && relative == true){
			//eval("styleObj = " + dhtmlPrefix + "element" + styleSuffix + "position=relative");	
			eval("styleObj = " + dhtmlPrefix + "element" + styleSuffix + dhtmlrelativePosX + "=" + Xpos);		
			eval("styleObj = " + dhtmlPrefix + "element" + styleSuffix + dhtmlrelativePosX + "=" + Xpos);		
		} else {
			eval("styleObj = " + dhtmlPrefix + "element" + styleSuffix + dhtmlpagePosX + "=" + Xpos);
			eval("styleObj = " + dhtmlPrefix + "element" + styleSuffix + dhtmlpagePosY + "=" + Ypos);
		}
	}
}




