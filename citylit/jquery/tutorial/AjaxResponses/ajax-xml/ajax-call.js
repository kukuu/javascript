/*Use the HTML page and the XML document from the previous example. Also, keep the url variable and the processData() function from the previous exercise - you will use both as the url and the success arguments respectively inside the $.ajax() function. Delete everything else inside the document.ready() function. Just below the processData() function, write the following code:*/

$(document).ready(function() {

		var url = "test.xml";	
		
		//Package the code that handles
		
		//error message in case the request
		
		//is not successful:
		
		function errorAlert(e, jqxhr){
			alert("Your request was not successful: " + jqxhr);
		}
		
		
		/*************************************/
		
		
		//Attach a click handler to the
		
		//link element on the page
		
		$('a').click(function(){
		
		//Prepare the AJAX request that
		
		//will be sent when the user clicks the link:
		
			$.ajax({
				type: "GET",	
				cache: false,
				url: url,
				dataType: "xml",
				contentType: "text/html",
				success: processData,
				error: errorAlert
			
			}); //end of $.ajax
		
		}); //end of click handler
		
		//process  data
				
			function processData(data) {
		    	var resultStr = "";//store result as a string
			  	var items = $(data).find('language');
			    $(items).each(function(i) {
					  resultStr += $(this).text() + '<br />';
					  $('#result').html(resultStr);
				  });//end of each		  
		  	}
		
		});  //end of $.ready function
		
		

