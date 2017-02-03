

   1:  $(document).ready(function() {

   2:   

   3:      // We use the jQuery validator plugin to do input validation

   4:      // http://docs.jquery.com/Plugins/Validation

   5:   

   6:      // call the validate method on our form, and pass in our explicit options

   7:      $("#frmRegister").validate({

   8:          onkeyup:false,

   9:          rules: {

  10:              username: {

  11:                  required:true,

  12:                  minlength:5,

  13:                  maxlength:45,

  14:                  validChars:true,

  15:                  usernameCheck:true    // remote check for duplicate username

  16:              },

  17:              email_first: {

  18:                  required:true,

  19:                  email:true,

  20:                  maxlength:255,

  21:                  emailCheck:true    // remote check for duplicate email address

  22:              },

  23:              email_second: {

  24:                  required:true,

  25:                  equalTo: "#email_first"

  26:              },

  27:              password_first: {

  28:                  required:true,

  29:                  minlength:6,

  30:                  maxlength:128

  31:              },

  32:              password_second: {

  33:                  required:true,

  34:                  equalTo: "#password_first"

  35:              },

  36:              tos: {

  37:                  required:true

  38:              }

  39:          },

  40:          messages: {

  41:              username: {

  42:                  required: "username is required.",

  43:                  minlength: jQuery.format("username must be at least {0} characters in length."),

  44:                  maxlength: jQuery.format("username can not exceed {0} characters in length."),

  45:                  validChars: "please supply valid characters only.",

  46:                  usernameCheck:"this username is already in use."

  47:              },

  48:              email_first: {

  49:                  required: "email address is required.",

  50:                  email: "email address must be valid.",

  51:                  maxlength: jQuery.format("email address can not exceed {0} characters in length."),

  52:                  emailCheck:"this email address is already in use."

  53:              },

  54:              email_second: {

  55:                  required: "confirmed email address is required.",

  56:                  equalTo: "confirmed email address does not match."

  57:              },

  58:              password_first: {

  59:                  required: "password is required.",

  60:                  minlength: jQuery.format("password must be at least {0} characters in length."),

  61:                  maxlength: jQuery.format("password can not exceed {0} characters in length.")

  62:              },

  63:              password_second: {

  64:                  required: "confirmed password is required.",

  65:                  equalTo: "confirmed password does not match."

  66:              },

  67:              tos: {

  68:                  required: "in order to join, agreeing to the Terms and Conditions is required."

  69:              }

  70:          }

  71:      });

  72:   

  73:   

  74:  });

  75:   

  76:  // extend the validation plugin to do remote username and email dupe checking

  77:  jQuery.validator.addMethod('usernameCheck', function(username) {

  78:      var postURL = "user/json_username_check";

  79:      $.ajax({

  80:          cache:false,

  81:          async:false,

  82:          type: "POST",

  83:          data: "username=" + username,

  84:          url: postURL,

  85:          success: function(msg) {

  86:              result = (msg=='TRUE') ? true : false;

  87:          }

  88:      });

  89:      return result;

  90:  }, '');

  91:   

  92:  jQuery.validator.addMethod('emailCheck', function(email) {

  93:      var postURL = "user/json_email_check";

  94:      $.ajax({

  95:          cache:false,

  96:          async:false,

  97:          type: "POST",

  98:          data: "email=" + email,

  99:          url: postURL,
  

 100:          success: function(msg) {

 101:              result = (msg=='TRUE') ? true : false;

 102:          }

 103:      });

 104:      return result;

 105:  }, '');

 106:   

 107:  // check for unwanted characters

 108:  $.validator.addMethod('validChars', function (value) {

 109:   

 110:      var result = true;

 111:      // unwanted characters

 112:      var iChars = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?";

 113:   

 114:      for (var i = 0; i < value.length; i++) {

 115:          if (iChars.indexOf(value.charAt(i)) != -1) {

 116:              return false;

 117:          }

 118:      }

 119:      return result;

 120:   

 121:  }, '');

