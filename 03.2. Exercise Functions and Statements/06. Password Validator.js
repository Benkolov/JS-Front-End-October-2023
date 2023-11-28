function validatePassword(password) {
    if (password.length < 6 || password.length > 10) {
        console.log("Password must be between 6 and 10 characters");
    }

    const alphanumericRegex = /^[a-zA-Z0-9]+$/;
    if (!alphanumericRegex.test(password)) {
        console.log("Password must consist only of letters and digits");
    }

    const digitCount = password.replace(/[^0-9]/g, "").length;
    if (digitCount < 2) {
        console.log("Password must have at least 2 digits");
    }

    if (
        password.length >= 6 && password.length <= 10 &&
        alphanumericRegex.test(password) &&
        digitCount >= 2
    ) {
        console.log("Password is valid");
    }
}

validatePassword('logIn');
validatePassword('MyPass123');
validatePassword('Pa$s$s');

