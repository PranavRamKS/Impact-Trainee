function validate() {
    var name = document.getElementById("username").value;
    var emailId = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var password2 = document.getElementById("password2").value;

    if (name == '') {
        document.getElementById("user-name").innerHTML = "Cannot be null";
        return false;
    }
    else if (password.length < 8) {
        document.getElementById("pass-errror").innerHTML = "length is too low";
        return false;
    }
    else if (password == '') {
        document.getElementById("pass-errror").innerHTML = "Cannot be null";
        return false;
    }
    else if (password2 == '') {
        document.getElementById("pass2-error").innerHTML = "Confirm password Cannot be null";
        return false;
    }
    else if (password2 != password) {
        document.getElementById("pass2-error").innerHTML = "Confirm password Do not match";
        return false;
    }
}
