import { useState } from 'react';

export default function useEmail() {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const emailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        if (!value.trim()) {
            setEmailError('Email is required');
        } else if (!value.includes('@')) {
            setEmailError('Invalid email address');
        } else {
            setEmailError('');
        }
    };

    const resetEmail = () => {
        setEmail('');
        setEmailError('');
    };

    return {
        email,
        setEmail,
        emailError,
        setEmailError,
        emailChange,
        resetEmail,
    };
}