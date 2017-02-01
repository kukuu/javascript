//Allow IE4 to work with us.
if(!document.getElementById && document.all){
	document.getElementById = function(id) {return document.all[id];}
	}

/*ticker functions*/

var theCharacterTimeout = 50;
var theStoryTimeout     = 3000;
var theWidgetOne        = "_";
var theWidgetTwo        = "-";
var theWidgetNone       = "";
var theLeadString       = "<h2>Codeunique provides consultancy in</h2>";

var theTips = new Array();

//update or add tips here, single quotes are OK

theTips[0] = "Web Programming, Web Design and Web Standards.";
theTips[1] = "eCommerce";
theTips[2] = "Internet and Interactive TV Broadcasting";
theTips[3] = "Telematics Systems and Services";
theTips[4] = "Web Hosting.";
theTips[5] = "JavaScript";
theTips[6] = "Cascading Stylesheets";
theTips[7] = "Document Object Model";
theTips[8] = "Data Binding";
theTips[9] = "XML and XSLT";
theTips[10] = "Java and JSP";
theTips[11] = "User Data and CGI  Email. ";
theTips[12] = "PHP. ";
theTips[13] = "ORACLE.";
theTips[14] = "SQL/PL.";
theTips[15] = "Perl.";
theTips[16] = "C/C++ Programming.";
	
//end tips
	
var theItemCount = theTips.length;

if ((document.getElementById) && (document.body.innerHTML)) {
	//write div for dhtml broswers to display tips
	document.write("<div class='ticker' id='tickerAnchor'></div>");
	}else{
	//write div for non-dynamic browsers and display random tip	
	document.write("<div class='ticker'>" + theLeadString + theTips[Math.round(Math.random() * (theTips.length -1))] + "</div>");
	}	

	
// Ticker startup
function startTicker()
{
	// Define run time values
	theCurrentStory     = -1;
	theCurrentLength    = 0;
	// Locate base objects
	if (document.getElementById) {	
		    theAnchorObject     = document.getElementById("tickerAnchor");
			runTheTicker();   	
		 }	
}

// Ticker main run loop
function runTheTicker()
{
	var myTimeout;  
	// Go for the next story data block
	if(theCurrentLength == 0)
	{	
		theCurrentStory++;
		theCurrentStory      = theCurrentStory % theItemCount;
		theStorySummary      = theTips[theCurrentStory].replace(/&quot;/g,'"');				
		thePrefix 	     = "<span class=\"tickerLeadString\">" + theLeadString + "</span>";
	}
	// Stuff the current ticker text into the anchor
	theAnchorObject.innerHTML = thePrefix + 
	theStorySummary.substring(0,theCurrentLength) + whatWidget();
	// Modify the length for the substring and define the timer
	if(theCurrentLength != theStorySummary.length)
	{
		theCurrentLength++;
		myTimeout = theCharacterTimeout;
	}
	else
	{
		theCurrentLength = 0;
		myTimeout = theStoryTimeout;
	}
	// Call up the next cycle of the ticker
	setTimeout("runTheTicker()", myTimeout);
}

// Widget generator
function whatWidget()
{
	if(theCurrentLength == theStorySummary.length)
	{
		return theWidgetNone;
	}

	if((theCurrentLength % 2) == 1)
	{
		return theWidgetOne;
	}
	else
	{
		return theWidgetTwo;
	}
}

startTicker();