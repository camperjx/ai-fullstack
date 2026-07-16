import { useEffect, useState } from 'react';
import './Index.css';
import { useNavigate } from 'react-router-dom';

const mockLogin = (email, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === 'test@test.com' && password === '123456') {
                resolve({ email });
            } else {
                reject(new Error('Invalid email or password'));
            }
        }, 1000);
    });
};

export default props => {
    // Define state variables for email and password to make the input as controlled components
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    // validate form inputs
    const [errors, setErrors] = useState({ email: '', password: '' });

    const [status, setStatus] = useState('idle'); // idle, loading, success, error  


    const validate = (email, password) => {
        let errors = {};
        if (!email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Email address is invalid";
        }

        if (!password) {
            errors.password = "Password is required";
        } else if (password.length < 6) {
            errors.password = "Password must be at least 6 characters";
        }

        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate(email, password);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            // Proceed with form submission (e.g., API call)
            setStatus('loading');
            mockLogin(email, password)
                .then(user => {
                    console.log("Form submitted", { email, password });
                    setStatus('success');
                    // Navigate to the home page after successful login
                    navigate('/home');
                })
                .catch(error => {
                    console.log("Incorrect email or password", error);                
                    setStatus('error');
                    setErrors({email:"Incorrect email or password", password:""});
                });
        }else {
            setStatus('error');
            setErrors({email:"Incorrect email or password", password:""});
            console.log("Validation errors", validationErrors);
            return; // Stop form submission if there are validation errors
        }
    }

    useEffect(() => {
        // Fetch user data or perform other side effects here
    }, []);

    return (
        <div className="login-container">
            <form className='form-container' noValidate onSubmit={handleSubmit} >
                <h2>CareerMate Login</h2>
                <label htmlFor="email">Email: {errors.email && <p className="submit-error">{errors.email}</p>}</label>

                <input type="email" id="email" name="email" required value={email} onChange={e => setEmail(e.target.value)} />
                <label htmlFor="password">Password: {errors.password && <p className="submit-error">{errors.password}</p>}</label>
                <input type="password" id="password" name="password" required value={password} onChange={e => setPassword(e.target.value)} />
                <button disabled={status === 'loading'} type="submit">{status === 'loading' ? 'Logging in...' : 'Login'}</button>
            </form>
        </div>
    );
};