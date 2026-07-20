import { useEffect, useRef } from 'react';
import "./TextInput.css";

const TextInput = ({
    label,
    id,
    name,
    type = "text",
    value,
    onChange,
    autoFocus = false,
    error,
}) => {
    const inputRef = useRef(null);

    useEffect(() => {
        if (autoFocus && inputRef.current) {
            inputRef.current?.focus();
        }
    }, [autoFocus]);


    return (
        <div className="text-input">
            <label htmlFor={id}>
                {label}
                {error && <span className="text-input-error">({error})</span>}
            </label>
            <input
                ref={inputRef}
                id={id}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                className={`text-input ${error ? 'error' : ''}`}
            />

        </div>
    );
}

export default TextInput;