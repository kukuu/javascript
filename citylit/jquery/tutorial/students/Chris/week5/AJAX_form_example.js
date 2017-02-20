$(function() {
	// ensures all error messages are initially hidden
	$('error').hide();
	// changes the background color of the input forms according to if they have focus
	$('input.text-input').css({backgroundColor:"#FFFFFF"});
	$('input.text-input').focus(function(){
		$(this).css({backgroundColor:"#FFDDAA"});
	});
	$('input.text-input').blur(function(){
		$(this).css({backgroundColor:"#FFFFFF"});
	});

	$(".button").click(function() {
		// validate and process form
		// first hide any error messages
		$('error').hide();
		
		// get value from input
		var name = $("input#name").val();
		
		// validate forms to ensure they are not empty
		if (name == "") {
			$("label#name_error").show();
			$("input#name").focus();
			return false;
		}
		if (email == "") {
			$("label#email_error").show();
			$("input#email").focus();
			return false;
		}
		if (phone == "") {
			$("label#phone_error").show();
			$("input#phone").focus();
			return false;
		}
		
		// combine all three inputs into one AJAX parseable string
		var dataString = 'name='+ name + '&email=' + email + '&phone=' + phone;
		//alert (dataString);return false;
		
			$.ajax({
				type: "POST",
				url: "bin/process.php",
				data: dataString
				success: functions() {
					$.('#contact_form').html("<div id='message'></div>");
					$('#message')
				}
			})
	
	}
}