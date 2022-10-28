function onChangeEmail() {
    toggleButtonsDisable();
    toggleEmailErrors();
}

function onChangePassword() {
    toggleButtonsDisable();
    togglePasswordErrors();
}

function isEmailValid() {
    const email = form.email().value;
    if (!email) {
        return false
    }
    return validateEmail(email);
}

function isPasswordValid() {
    const password = form.password().value;
    if (!password) {
        return false;
    }
    return true;
}

function toggleEmailErrors() {
    const email = form.email().value;
    if (!email || !validateEmail(email)) {
        form.emailError().style.display = "block";
    } else {
        form.emailError().style.display = "none";
    }
}

function togglePasswordErrors() {
    const password = form.password().value;
    if (!password) {
        form.passwordError().style.display = "block";
    } else {
        form.passwordError().style.display = "none";
    }
}


function toggleButtonsDisable() {
    const emailValid = isEmailValid();
    form.forgotButton().disabled = !emailValid;

    const passwordValid = isPasswordValid();
    form.loginButton().disabled = !emailValid || !passwordValid;
}


const form = {
    email: () => document.getElementById('email'),
    password: () => document.getElementById('password'),
    emailError: () => document.getElementById('email-error'),
    passwordError: () => document.getElementById('password-error'),
    forgotButton: () => document.getElementById('forgot-button'),
    loginButton: () => document.getElementById('login-button')
}