function validateForm(){
    var firstNameField = document.getElementById("first-name");
    var emailField = document.getElementById("email");
    var creditCardField = document.getElementById("credit-card");
    var securityCodeField = document.getElementById("security-code");
    if((firstNameField.value == "") || (firstNameField.value.search(/[^a-zA-Z ]+/) != -1)){
        document.getElementById("first-name-container").className = "not-valid";
    }
    if(emailField.value == "" || (emailField.value.length < 6) || (emailField.value.search(/[^a-zA-Z0-9@.]+/) != -1) ){
        document.getElementById("email-container").className = "not-valid";
    }
    if(creditCardField.value == "" || (creditCardField.value.length < 14) || (creditCardField.value.length > 16) || (creditCardField.value.search(/[^0-9]+/) != -1)){
        document.getElementById("credit-card-container").className = "not-valid";
    }
    if(securityCodeField.value.length != 3){
        document.getElementById("security-code-container").className = "not-valid";
    }
}
function resetField(el){
    var container = el.parentNode.parentNode.parentNode;
    container.className = "";
}