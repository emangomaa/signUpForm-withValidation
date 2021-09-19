// form validation 

// get all inputs
var firstNameInput = document.getElementsByTagName('input')[0];
var lastNameInput = document.getElementsByTagName('input')[1];
var emailInput = document.getElementsByTagName('input')[2];
var passwordInput = document.getElementsByTagName('input')[3];

// get small tag for error
var firstNameError = document.getElementsByTagName('small')[0]
var lastNameError = document.getElementsByTagName('small')[1]
var emailError = document.getElementsByTagName('small')[2]
var passwordError = document.getElementsByTagName('small')[3]

// get all i tags
var firstNameIcon = document.getElementsByTagName('i')[0]
var lastNameIcon = document.getElementsByTagName('i')[1]
var emailIcon = document.getElementsByTagName('i')[2]
var passwordIcon = document.getElementsByTagName('i')[3]


// validate first name
firstNameInput.focus()
firstNameInput.addEventListener('blur', function () {
    if (firstNameInput.value.length < 3) {
        firstNameError.style.display = "block";
        firstNameInput.style.border = "1px solid hsl(0, 100%, 74%)";
        firstNameIcon.style.display = "block"
        firstNameInput.focus()
    }
    else {
        firstNameError.style.display = "none";
        firstNameInput.style.border = "1px solid #ccc";
        firstNameIcon.style.display = "none"
    }
})

// last name validation
lastNameInput.addEventListener('blur', function () {
    if (lastNameInput.value.length < 3) {
        lastNameError.style.display = "block";
        lastNameInput.style.border = "1px solid hsl(0, 100%, 74%)";
        lastNameIcon.style.display = "block";
        lastNameInput.focus();
    }
    else {
        lastNameError.style.display = "none";
        lastNameInput.style.border = "1px solid #ccc";
        lastNameIcon.style.display = "none"
    }
})

// email validation 

emailInput.addEventListener('blur', function () {
    if (!(isEmailValid())) {
        emailError.style.display = "block";
        emailInput.style.border = "1px solid hsl(0, 100%, 74%)";
        emailIcon.style.display = "block";
        emailInput.focus();
    }
    else {
        emailError.style.display = "none";
        emailInput.style.border = "1px solid #ccc";
        emailIcon.style.display = "none"
    }
})

//password validation
passwordInput.addEventListener('blur', function () {
    if (passwordInput.value.length < 6) {
        passwordError.style.display = "block";
        passwordInput.style.border = "1px solid hsl(0, 100%, 74%)";
        passwordIcon.style.display = "block";
        passwordInput.focus();
    }
    else {
        passwordError.style.display = "none";
        passwordInput.style.border = "1px solid #ccc";
        passwordIcon.style.display = "none"
    }
})

function isEmailValid() {
    var emailExpr = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailInput.value.match(emailExpr);
}