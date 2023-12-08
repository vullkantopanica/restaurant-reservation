$('.message a').click(function () {
    $('form').animate(
        { 
            height: "toggle", 
            opacity: "toggle" 
        }, "slow");
});

$(document).ready(function () {
    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isValidPassword(password) {
        var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])/;
        return passwordRegex.test(password);
    }

    $(".login-form").submit(function (event) {
        var email = $("#emailLogin").val();
        var isEmailValid = isValidEmail(email);

        var password = $("#passwordLogin").val();
        var isPasswordValid = isValidPassword(password);

        if (!isEmailValid) {
            $("#emailLoginError").text("Invalid email address");
            event.preventDefault();
        } else {
            $("#emailLoginError").text("");
        }

        if (!isPasswordValid) {
            $("#passwordLoginError").text("Invalid password");
            event.preventDefault();
        } else {
            $("#passwordLoginError").text("");
        }
    });

    $(".register-form").submit(function (event) {
        debugger;
        var email = $("#emailSignUp").val();
        var isEmailValid = isValidEmail(email);

        var password = $("#passwordSignUp").val();
        var isPasswordValid = isValidPassword(password);

        if (!isEmailValid) {
            $("#emailSignUpError").text("Invalid email address");
            event.preventDefault();
        } else {
            $("#emailSignUpError").text("");
        }

        if (!isPasswordValid) {
            $("#passwordSignUpError").text("Invalid password");
            event.preventDefault();
        } else {
            $("#passwordSignUpError").text("");
        }
    });
});