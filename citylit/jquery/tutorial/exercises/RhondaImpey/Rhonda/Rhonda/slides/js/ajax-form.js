//Purpose: AJAX  - Query script for retturning feedback and submitting to the server
//Author: Alexander Adu-Sarkodie
//Date: February 2012

  var name = $("input#name").val();
  var email = $("input#email").val();
  var phone = $("input#phone").val();
  var town = $("input#town").val();
  var yourcomments = $("input#yourcomments").val();
  var dataString = 'name='+ name + '&email=' + email + '&phone=' + phone+ '&town=' + town+ '&yourcomments=' + yourcomments;
	  alert (dataString);return false;
	  $.ajax({
	    type: "POST",
	    url: "bin/process.php",
	    data: dataString,
	    success: function() {
	      $('#container').html("<div id='message'></div>");
	      $('#message').html("<h2>Contact Form Submitted!</h2>")
	      .append("<p>We will be in touch soon.</p>")
	      .hide()
	      .fadeIn(1500, function() {
	        $('#message').append("<img id='checkmark' src='images/smileyface.png' />");
	      });
	    }
	  });
	  return false;