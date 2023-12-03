//select all inputs for validation
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("pwd");
const phoneNumber = document.getElementById("phone");
const gender = document.signup;

//form validation
function formValidation() {
    //checking name length
    if(name.value.length<2 || name.value.length >20){
        alert("Name length should be more than 2 and less than 21");
        name.focus();
        return false;
    }
    // password check
    if(!password.value.match(/^.{5,15}$/)){
        alert("Password length must be 5-15 characters");
    }
}