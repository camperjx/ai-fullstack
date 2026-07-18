import { useEffect, useState, useRef } from 'react';
import './Index.css';

function mockLogin(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === 'test@test.com' && password === '123456') {
                resolve();
            } else {
                reject(new Error('Incorrect email or password'));
            }
        }, 1000);
    });
}

const Login = () => {
    // Define state variables for email and password to make the input as controlled components
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [error, setError] = useState("");
    const emailInputRef = useRef(null);

    const [status, setStatus] = useState('idle'); // idle, loading, success, error  

    function emailChange(e) {
        const value = e.target.value;

        setEmail(value);
        setError("");
        setStatus("idle");

        if (!value.trim()) {
            setEmailError("Email is required");
        }
        else if (!value.includes("@")) {
            setEmailError("Invalid email format");
        }
        else if (value.length > 50) {
            setEmailError("Email must be less than 50 characters");
        }
        else {
            setEmailError("");
        }
    }

    function passwordChange(e) {
        const value = e.target.value;

        setPassword(value);
        setError("");
        setStatus("idle");

        if (!value.trim()) {
            setPasswordError("Password is required");
        }
        else if (value.length < 6) {
            setPasswordError("Password must be at least 6 characters");
        }
        else if (value.length > 20) {
            setPasswordError("Password must be less than 20 characters");
        }
        else {
            setPasswordError("");
        }
    }

    const validate = () => {
        let hasError = false;

        if (!email.trim()) {
            setEmailError("Email is required");
            hasError = true;
        }
        else if (!email.includes("@")) {
            setEmailError("Invalid email format");
            hasError = true;
        }
        else if (email.length > 50) {
            setEmailError("Email must be less than 50 characters");
            hasError = true;
        }

        if (!password.trim()) {
            setPasswordError("Password is required");
            hasError = true;
        }
        else if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters");
            hasError = true;
        }
        else if (password.length > 20) {
            setPasswordError("Password must be less than 20 characters");
            hasError = true;
        }

        return !hasError;
    };

    async function handleLogin() {
        setError("");
        setStatus("loading");
        if (!validate()) {
            setStatus('error');
            console.log("Validation errors");
            return; // Stop form submission if there are validation errors
        }

        try {
            await mockLogin(email, password);
            console.log("Form submitted", { email, password });
            setStatus('success');
        }
        catch (err) {
            console.log("Incorrect email or password", err);
            setStatus('error');
            setError(err.message);
        }
    }

    useEffect(() => {
        // Fetch user data or perform other side effects here
        emailInputRef.current.focus(); // Focus on the email input field when the component mounts
    }, []);

    return (
        <div className="login-container">
            <form className='form-container' noValidate onSubmit={(e) => e.preventDefault()} >
                <h2>CareerMate Login</h2>
                <label htmlFor="email">Email: {emailError && <p className="error-message">{emailError}</p>}</label>

                <input type="email" id="email" name="email" required value={email} onChange={emailChange} ref={emailInputRef} />
                <label htmlFor="password">Password: {passwordError && <p className="error-message">{passwordError}</p>}</label>
                <input type="password" id="password" name="password" required value={password} onChange={passwordChange} />
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                
                {status === "error" && error && <p className="error-message">{error}</p>}
                {status === "success" && <p className="success-message">Login Success</p>}
                <button disabled={status === 'loading'} type="button" onClick={handleLogin}>{status === 'loading' ? 'Logging in...' : 'Login'}</button>
            </form>
        </div>
    );
};

export default Login;
