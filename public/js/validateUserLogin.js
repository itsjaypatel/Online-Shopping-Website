function validate(){
    var mobile = document.getElementById("mobile").value.trim();
    var password = document.getElementById("password").value.trim();
    var flag = true;

    document.getElementById("mobile-error").innerHTML = '';
    document.getElementById("password-error").innerHTML = '';

    // var mobilePattern = /^[6-9]\d{9}$/;
    var mobilePattern = /^(\+)(\d{2,4})(\d{10})$/;
    if(!mobilePattern.test(mobile)){
        document.getElementById("mobile-error").innerHTML = "Invalid Mobile Number Pattern!";
        flag = false;
    }

    var passPattern = /(?=.*\d)(?=.*[A-Z])(?=.*[\!\@\#\%\$\^\&\*\-\_\|\?]).{8,15}/;
    if(!passPattern.test(password)){
        document.getElementById("password-error").innerHTML = 'Password length must be 8 to 20 and must contain at least One Capital letter, Small letter, Digit, Special Character and must not contain white space character!';
        flag = false;
    }

    return flag;
}