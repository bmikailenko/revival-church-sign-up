export default function validateInfo(values, recaptchaValue) {
    let errors = {};

    // email
    if (!values.email.trim()) {
        errors.email = "Email required"
    } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email)) {
        errors.email = "Email address is invalid";
    }

    if (!values.tel) {
        errors.tel = "Phone number is required";
    } 

    if (recaptchaValue === '') {
        errors.recaptcha = "Recaptcha is required";
    }

    return errors
}