import { useState } from 'react';
import TextInput from '../../components/TextInput/TextInput';
import "./Register.css";

const mockRegister = (form) => {
    console.log('Mock register:', form);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (form.email === "test@test.com") {
                reject(new Error("Email already exists"));
            } else {
                resolve();
            }
        }, 1000);
    });
};

const Register = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
    });

    const [error, setError] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });

    const [status, setStatus] = useState('idle');
    const [submitError, setSubmitError] = useState("");

    const getFieldError = (fieldName, value) => {
        if (fieldName === "name") {
            if (!value.trim()) {
                return "Name is required";
            } else if (value.length > 50) {
                return "Name must be less than 50 characters";
            }
        }

        if (fieldName === "email") {
            if (!value.trim()) {
                return "Email is required";
            } else if (!value.includes("@")) {
                return "Invalid email format";
            } else if (value.length > 50) {
                return "Email must be less than 50 characters";
            }
        }

        if (fieldName === "phone") {
            if (!value.trim()) {
                return "Phone is required";
            } else if (value.length > 15) {
                return "Phone must be less than 15 characters";
            }
        }

        if (fieldName === "address") {
            if (!value.trim()) {
                return "Address is required";
            } else if (value.length > 100) {
                return "Address must be less than 100 characters";
            }
        }

        return "";
    };

    function handleChange(e) {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value,
        }));

        setError(prevError => ({
            ...prevError,
            [name]: getFieldError(name, value),
        }));

        setSubmitError("");
        setStatus('idle');
    }

    function validate() {
        const nextErrors = {
            name: getFieldError("name", form.name),
            email: getFieldError("email", form.email),
            phone: getFieldError("phone", form.phone),
            address: getFieldError("address", form.address),
        };

        setError(nextErrors);

        return !Object.values(nextErrors).some((error) => error);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setSubmitError("");
        setStatus('loading');


        if (!validate()) {
            setStatus('error');
            console.log("Validation errors");
            return; // Stop form submission if there are validation errors
        }
        try {
            await mockRegister(form);
            setStatus('success');
            console.log("Registration successful");
        } catch (error) {
            setStatus('error');
            setSubmitError("Registration failed");
            console.log("Registration failed", error);
        }
    }

    return (
        <main className="register-page">
            <form className="register-form" onSubmit={handleSubmit} noValidate>
                <h2>CareerMate Register</h2>
                <TextInput
                    label="Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    error={error.name}
                    autoFocus
                />
                <TextInput
                    label="Email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    error={error.email}
                    
                />
                <TextInput
                    label="Phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    error={error.phone}
                    
                />
                <TextInput
                    label="Address"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    error={error.address}

                />

                {submitError && <p className="register-error">{submitError}</p>}
                {status === "success" && <p className="register-success">Registration successful!</p>}
                {status === "error" && !submitError && <p className="register-error">Please fix the errors above.</p>}

                <button disabled={status === "loading"} type="submit">
                    {status === "loading" ? "Registering..." : "Register"}
                </button>
                <section className="register-preview">
                    <p>Name: {form.name}</p>
                    <p>Email: {form.email}</p>
                    <p>Phone: {form.phone}</p>
                    <p>Address: {form.address}</p>
                </section>
            </form>
        </main>
    );
}

export default Register;