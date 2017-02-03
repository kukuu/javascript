//Form validation script
// A. Adu-Sarkodie

//init function to bind event handlers

function init() {
  var myForm = document.getElementById("myForm");
	myForm.onsubmit = validate; 
}

		/********************************/	
		
		//bind init() function to onload event

onload = init;


/******************************************/
		//validate() checks answers from validateRequired()
		
		//and validateEmail() and displays appropriate messages.
		
		//If an error occurs program execution is stopped:
function validate() {
  	var name = document.getElementById("txtName").value;
	var email = document.getElementById("txtEmail").value;
	
	
	//validateRequired() and validateEmail()
	
	//return true/false values: create
		
	//variables to store the result
	var isRequiredNameSet = false;
	var isRequiredEmailSet = false;
	var isEmailValid = false;
	
	//create variable that holds message to display
	var message = "";
	
	//function to validate entered name/string
	isRequiredNameSet = validateRequired(name);
	isRequiredEmailSet = validateRequired(email);
	isEmailValid = validateEmail(email);
	
	
	//if all values are valid, prepare thank you message
		//and allow form submission
	if (isRequiredNameSet && isRequiredEmailSet && isEmailValid) {
	  message = "Thank you, your details have been successfully posted!";
	}
	
	//if the name field is empty, we write message to user and stop submission:
	else if (! isRequiredNameSet) {
	  message = "Please, enter a name";
		writeMessage(message);
		return false;
	}
	
	//If the email field is empty, write message to user and stop submission:
	else if (! isRequiredEmailSet) {
	  message = "Please, enter an email";
    	writeMessage(message);		
			return false;
	}
	
	
		//If the email is not in a valid format (no @ or . characters),
		//we write a message to the user and stop program execution:
		//Best to use regular expression here
	else if (! isEmailValid) {
	  	message = "Please, enter a valid email";
		writeMessage(message);
		return false;
	}
	
		//If we are here validation is successful:
		//display the thank you message with an alertbox:
			alert(message);
}


		//This function takes an argument
		//that represents the input element and checks
		//that it's not empty - it returns true if input is valid
		//and false if input is not valid:
function validateRequired(input) {
  var isValid = false;
  if (input.length == 0) 
	{
		  isValid = false;		
	}
	else {
		isValid = true;
	}
  return isValid;
}



		
		//validateEmail(email) checks the email is in valid	
		//format and returns true if it is, false if it isn't:
		
function validateEmail(email) {
  var isValid = false;
	if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
	  isValid = false;
	}
	else {
	  isValid = true;
	}
  return isValid;
}


		//writeMessage(text) has the message to
		
		//display to the user as argument, clears any previous
		
		//content from the paragraph with the id of result
		
		//and inserts the appropriate message for display
		
		//using DOM compliant techniques (lesson 14):
function writeMessage(text) { 
  var paragraph = document.getElementById("result");
  
  //The content inside the paragraph is the paragraph's	
	//first child.  We check if there is any content and remove it:
	
	if (paragraph.firstChild) {
	  paragraph.removeChild(paragraph.firstChild);
	}
	
	//Now we can create and append the new
	//message to display to the user:
		
	paragraph.appendChild(document.createTextNode(text));
}