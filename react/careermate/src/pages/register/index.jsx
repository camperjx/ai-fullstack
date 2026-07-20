import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import TextInput from '../../components/TextInput/TextInput';
import useEmail from '../../hooks/useEmail';
import { validateRegister } from '../../utils/validators';
import './Register.css';

function mockRegister() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}

export default function Register() {
    const navigate = useNavigate();
    const { email, emailError, emailChange, setEmailError } = useEmail();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [nameError, setNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [status, setStatus] = useState('idle');

    function nameChange(e) {
        setName(e.target.value);
        setNameError('');
        setStatus('idle');
    }

    function passwordChange(e) {
        setPassword(e.target.value);
        setPasswordError('');
        setStatus('idle');
    }

    function confirmPasswordChange(e) {
        setConfirmPassword(e.target.value);
        setConfirmPasswordError('');
        setStatus('idle');
    }


    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('loading');

        const errMsg = validateRegister({
            name,
            email,
            password,
            confirmPassword,
        });

        if (Object.keys(errMsg).length > 0) {
            setNameError(errMsg.name || '');
            setEmailError(errMsg.email || '');
            setPasswordError(errMsg.password || '');
            setConfirmPasswordError(errMsg.confirmPassword || '');
            setStatus('error');
            return;
        }


        await mockRegister();
        setStatus('success');

        setTimeout(() => {
            navigate('/');
        }, 800);
    }

    return (
        <main className="register-page">
            <form className="register-form" onSubmit={handleSubmit} noValidate>
                <h2>CareerMate Register</h2>

                <TextInput
                    label="Name"
                    name="name"
                    value={name}
                    onChange={nameChange}
                    error={nameError}
                    autoFocus
                />

                <TextInput
                    label="Email"
                    name="email"
                    value={email}
                    onChange={emailChange}
                    error={emailError}
                />

                <TextInput
                    label="Password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={passwordChange}
                    error={passwordError}
                />

                <TextInput
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={confirmPasswordChange}
                    error={confirmPasswordError}
                />

                {status === 'success' && <p className="success-message">Register success</p>}
                {status === 'error' && <p className="error-message">Please fix the errors above.</p>}

                <button disabled={status === 'loading'} type="submit">
                    {status === 'loading' ? 'Registering...' : 'Register'}
                </button>

                <p>Already have an account?</p>
                <NavLink to="/" className="login-link">
                    Login
                </NavLink>
            </form>
        </main>
    );
}
