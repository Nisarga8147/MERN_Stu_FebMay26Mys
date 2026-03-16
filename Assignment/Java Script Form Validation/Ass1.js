const signupForm = document.getElementById("signupForm");
const signupPassword = document.getElementById("signupPassword");
const signupConfirmPassword = document.getElementById("signupConfirmPassword");
const message = document.getElementById("message");
signupForm.addEventListener("submit",function(event){
    event.preventDefault();
    //Password validation 
    const password = signupPassword.value;
    //check length of password
    if(password.length<8){
        message.textContent = "Password must be atleast 8 characters long.";
        message.style.color= "red";
        signupPassword.focus();
        return;
    }
    //check UPPERCASE characters
    if(!/[A-Z]/.test(password)){
        message.textContent = "Password must have atleast 1 UPPERCASE character.";
        message.style.color= "red";
        signupPassword.focus();
        return; 
    }
    //check lowercase characters
     if(!/[a-z]/.test(password)){
        message.textContent = "Password must have atleast 1 lowercase character.";
        message.style.color= "red";
        signupPassword.focus();
        return; 
    }
    //check number
    if(!/\d/.test(password)){
        message.textContent = "Password must have atleast 1 digit in it.";
        message.style.color= "red";
        signupPassword.focus();
        return;
    }
    //check special characters
    if(!/[@#$%&*!]/.test(password)){
        message.textContent = "Password must have atleast 1 special character @#$%&*!.";
        message.style.color= "red";
        signupPassword.focus();
        return;
    }
    // message.textContent = "Valid password entered";
    // message.style.color= "green";
    if(signupPassword.value == signupConfirmPassword.value){
        message.textContent = "Password confirm";
        message.style.color="green";
        return;
    }
    else{
     message.textContent = "Password incorrect";
        message.style.color= "red";
        return;
    }
});
