	$(document).ready(function()
		
		{
		
		//Store the URL value in a variable
		
		var url = "content.xml";
		
		
		/*************************************/
		
		
		//Package the result-handling code
		
		//in its own function: it's more readable
		
		function processData(data)
		
		{
		
		//This variable will hold the result
		
		//converted into a string for display
		
		var resultStr = "";
		
		//use jQuery .find() to extract the language
		
		//element from the returned data
		
		//and store it in an array
		
		var items = $(data).find('language');
		
		//loop over each language item with
		
		//jQuery .each() function
		
		$(items).each(function(i)
		
		{
		
		//extract the text of each language item and
		
		//add it to the resultStr variable with a line break.
		
		//Notice the use of $(this)
		
		//to refer to the item currently being
		
		//inspected by the loop
		
		resultStr += $(this).text() + '<br />';
		
		//add the final string result to div element
		
		//with the id of result using .html()
		
		$('#result').html(resultStr);
		
		});
		
		}
		
		
		/****************************************/
		
		
		//Attach a click handler to the link element:
		
		//when the user clicks on the link, the AJAX
		
		//request is sent to the server:
		
		$('a').click(function()
		
		{
		
		//use $.get() passing the url variable and
		
		//the name of the result-handling function
		
		//as arguments:
		
		$.get(url, processData);
		
		});
		
		});