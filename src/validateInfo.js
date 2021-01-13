export default function validateInfo(values, recaptchaValue) {
    let errors = {};

    if (!values.firstName.trim()) {
        errors.firstName = "First name required"
    }

    if (!values.lastName.trim()) {
        errors.lastName = "Last name required"
    }

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

    if (values.memberYes === 'yes' && values.memberNo === 'yes') {
        errors.member = "Only select one option";
    } else if (values.memberYes === 'no' && values.memberNo === 'no') {
        errors.member = "This question is required";
    }

    return errors
}