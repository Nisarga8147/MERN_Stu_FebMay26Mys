//password strength tagger
function checkPasswordStrength(password) {

    if (typeof password !== "string") {
        return "Invalid";
    }

    let hasLetter = false;
    let hasNumber = false;

    for (let i = 0; i < password.length; i++) {
        let ch = password[i];

        if (
            (ch >= 'a' && ch <= 'z') ||
            (ch >= 'A' && ch <= 'Z')
        ) {
            hasLetter = true;
        }

        if (ch >= '0' && ch <= '9') {
            hasNumber = true;
        }
    }

    if (password.length < 8) {
        return "Weak";
    }
    else if (password.length >= 12 && hasLetter && hasNumber) {
        return "Strong";
    }
    else if (password.length >= 8 && hasLetter && hasNumber) {
        return "Medium";
    }
    else {
        return "Weak";
    }
}
console.log(checkPasswordStrength("abc"));      
