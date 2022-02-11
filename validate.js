var form = document.getElementById('form');
var username = document.getElementById('username');
var email = document.getElementById('email');
var password = document.getElementById('password');
var password_check = document.getElementById('password_check');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInput();
});

function checkInput(){
// get the value form input
    var usernameValue = username.value.trim();
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();
    var password_checkValue = password_check.value.trim();
    // validate username
    if (usernameValue ===''){
        // show error
        // add error class
        setErrorFor(username, 'Username can not blank'); //username is id
    }
    else{
        // add success class
        setSuccessFor(username);
    }

    // validate email
    if (emailValue ===''){
        setErrorFor(email, 'Email can not blank'); //username is id
    }
    else if (!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid'); //username is id
    }
    else{
        setSuccessFor(email);
    }

    // validate password
    if (passwordValue ===''){
        setErrorFor(password, 'Password can not blank'); //username is id
    }
    else if (!checkPassword(passwordValue)){
        setErrorFor(password, 'password is not valid'); //username is id
    }
    else{
        // add success class
        setSuccessFor(password);
    }

    // validate password confirmation
    if (password_checkValue ===''){
        setErrorFor(password_check, 'Password can not blank'); //username is id
    }
    else if(password_checkValue !== passwordValue){
        setErrorFor(password_check, 'Password is not match  '); //username is id
    }
    else{
        // add success class
        setSuccessFor(password_check);
    }
};

function setErrorFor(input, message){
    var formControl = input.parentElement; // is .form-control
    var errorMessage = formControl.querySelector('.message');
    // add error message
    errorMessage.innerText = message;
    //add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input){
    var formControl = input.parentElement; // is .form-control
    formControl.className = 'form-control success';

}
// check email
function isEmail(email){
    var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(email);
}
// check password
function checkPassword (password){
    // method 1: .match() method
    // var upperCase = '(?=.*?[A-Z])';
    // var lowerCase = '(?=.*?[a-z])';
    // var digit = '(?=.*?[0-9])';
    // var specialCharater = '(?=.*?[#?!@$%^&*-])';
    // var passwordLength = '(?=.{8,})';
    // return (password.match(upperCase)) && (password.match(lowerCase)) && (password.match(digit)) && (password.match(specialCharater)) && (password.match(passwordLength));
    
    // ---shorthand of match()
    var strongRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*?[#?!@$%^&*-]).{8,20}$/;
    return password.match(strongRegex);


    
    // method 2: .test() method
    //a uppercase, a lowcase, a special characters, a number, at least 8 characters
    // var strongRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*?[#?!@$%^&*-]).{8,20}$/;  
    // return strongRegex.test(password);
}