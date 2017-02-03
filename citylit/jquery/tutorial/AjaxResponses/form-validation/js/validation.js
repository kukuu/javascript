$(function () {
    $('.error').hide();
    $('input.text-input').css({ backgroundColor: "#FFFFFF" });
    $('input.text-input').focus(function () {
        $(this).css({ backgroundColor: "#FFF" });
    });
    $('input.text-input').blur(function () {
        $(this).css({ backgroundColor: "#FFFFFF" });
        $(this).css({ border: "1px solid #ccc" });
    });

    $(".button").click(function () {
        // validate and process form
        // first hide any error messages
        $('.error').hide();

        //get value from input
        var name = $("input#name").val();
        if (name == "") {
            $("label#name_error").show();
            $("input#name").focus();
            $("input#name").css({ "border": "1px solid #FF0000" });
            return false;
        }

        var email = $("input#email").val();
        if (email == "") {
            $("label#email_error").show();
            $("input#email").focus();
            $("input#email").css({ "border": "1px solid #FF0000" });
            return false;
        }

        var phone = $("input#phone").val();
        if (phone == "") {
            $("label#phone_error").show();
            $("input#phone").focus();
            $("input#phone").css({ "border": "1px solid #FF0000" });
            return false;
        }

        var dataString = 'name=' + name + '&email=' + email + '&phone=' + phone;
        //alert (dataString);return false;

        $.ajax({
            type: "POST",
            url: "bin/process.php",
            data: dataString,
            success: function () {
                $('#contact_form').html("<div id='message'></div>");
                $('#message').html("<h2>Contact Form Submitted!</h2>")
	        .append("<p>We will be in touch soon.</p>")
	        .hide()
	        .fadeIn(1500, function () {
	            $('#message').append("<img id='checkmark' width='30px' height='30px' src='images/1.jpg' />");
	        });
            }
        });
        return false;
    });
});
runOnLoad(function(){
  $("input#name").select().focus();
});
