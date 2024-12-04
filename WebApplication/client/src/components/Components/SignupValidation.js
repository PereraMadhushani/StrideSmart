function Validation(values) {
    let errors = {};

    const user_name_pattern = /^[a-zA-Z0-9._-]{3,20}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if (values.fName === '') {
        errors.fName = "Full name should not be empty";
    }

    if (values.user_name === '') {
        errors.user_name = "User name should not be empty";
    }
    else if (!user_name_pattern.test(values.user_name)) {
        errors.user_name = "Invalid email format";
    }
    if (values.email === '') {
        errors.email = "Email should not be empty";
    } else if (!emailPattern.test(values.email)) {
        errors.email = "Invalid email format";
    }

    if (values.password === '') {
        errors.password = "Password should not be empty";
    } else if (!passwordPattern.test(values.password)) {
        errors.password = "Password must contain at least 8 characters, including uppercase, lowercase, and a number";
    }

    if (values.cPassword === '') {
        errors.cPassword = "Confirm password should not be empty";
    } else if (values.cPassword !== values.password) {
        errors.cPassword = "Passwords do not match";
    }

    return errors;
}

export default Validation;
