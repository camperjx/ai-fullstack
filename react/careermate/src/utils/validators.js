export function validateLogin({ email, password }) {
    const errors = {};

    if (!email.trim()) {
        errors.email = "Email is required";
    } else if (!email.includes("@")) {
        errors.email = "Invalid email format";
    } else if (email.length > 50) {
        errors.email = "Email must be less than 50 characters";
    }

    if (!password.trim()) {
        errors.password = "Password is required";
    } else if (password.length < 6) {
        errors.password = "Password must be at least 6 characters";
    } else if (password.length > 20) {
        errors.password = "Password must be less than 20 characters";
    }

    return errors;
}

export function validateRegister({ name, email, password, confirmPassword}) {
    const errors = {};

    if (!name.trim()) {
        errors.name = "Name is required";
    } else if (name.length > 50) {
        errors.name = "Name must be less than 50 characters";
    }

    if (!email.trim()) {
        errors.email = "Email is required";
    } else if (!email.includes("@")) {
        errors.email = "Invalid email format";
    } else if (email.length > 50) {
        errors.email = "Email must be less than 50 characters";
    }

    if (!password.trim()) {
        errors.password = "Password is required";
    } else if (password.length < 6) {
        errors.password = "Password must be at least 6 characters";
    } else if (password.length > 20) {
        errors.password = "Password must be less than 20 characters";
    }

    if (!confirmPassword.trim()) {
        errors.confirmPassword = "Confirm Password is required";
    } else if (confirmPassword !== password) {
        errors.confirmPassword = "Passwords do not match";
    }

    return errors;
}   