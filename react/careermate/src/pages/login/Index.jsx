import { useState, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Index.css';
import { validateLogin } from '../../utils/validators';
import useEmail from '../../hooks/useEmail';
import TextInput from '../../components/TextInput/TextInput';


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
    const navigate = useNavigate();
    const { email, setEmail, emailError, setEmailError, emailChange, resetEmail } = useEmail();
    const [password, setPassword] = useState('');
    // const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [error, setError] = useState("");
    const emailInputRef = useRef(null);

    const [status, setStatus] = useState('idle'); // idle, loading, success, error  


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


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setStatus("loading");

        const errMsg = validateLogin({ email, password });
        if (errMsg.email || errMsg.password) {
            setEmailError(errMsg.email || "");
            setPasswordError(errMsg.password || "");
            setStatus("error");
            return;
        }

        try {
            await mockLogin(email, password);
            setStatus("success");
            navigate('/home'); // Redirect to home page on successful login
        } catch (err) {
            setError(err.message);
            setStatus("error");
        }
    };

    // useEffect(() => {
    //     const login = async () => {
    //         try {
    //             await mockLogin(email, password);
    //             setStatus("success");
    //             navigate('/home'); // Redirect to home page on successful login
    //         } catch (err) {
    //             setError(err.message);
    //             setStatus("error");
    //         }
    //     };
    //     login();
    // }, [email, password, navigate]);

    return (
        <div className="login-container">
            <form className='form-container' noValidate onSubmit={handleSubmit} >
                <h2>CareerMate Login</h2>
            
                <TextInput
                    label="Email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={emailChange}
                    error={emailError}
                    autoFocus
                />
                {error && <p className="error-message">{error}</p>}

                <TextInput
                    type="password"
                    label="Password"
                    name="password"
                    value={password}
                    onChange={passwordChange}
                    error={passwordError}
                />
                {error && <p className="error-message">{error}</p>}


                {status === "error" && error && <p className="error-message">{error}</p>}
                {status === "success" && <p className="success-message">Login Success</p>}
                <button disabled={status === 'loading'} type="submit">{status === 'loading' ? 'Logging in...' : 'Login'}</button>
                <p>Don't have an account?</p>
                <NavLink to="/register" className="register-link">
                    Register
                </NavLink>
            </form>
        </div>
    );
};

export default Login;
