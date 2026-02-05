import { useState } from "react";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";
import "./Registration.css";

export default function Registration() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [formValid, setFormValid] = useState(true);

    function handleNameChange(name: string): void {
        setName(name);
    }
    function handleEmailChange(email: string): void {
        setEmail(email);
    }
    function handlePasswordChange(password: string): void {
        setPassword(password);
    }

    function validateRegistrationForm(e: React.FormEvent): void {
        e.preventDefault();
        name && email && password ? setFormValid(true) : setFormValid(false);
    }

    return (
        <>
            <h3 className="registration-title">Registration</h3>
            <div className="registration-form-container">
                <form
                    className="registration-form"
                    noValidate
                    onSubmit={(e) => validateRegistrationForm(e)}
                >
                    <Input
                        inputName="Name"
                        labelText="Name"
                        placeholderText="Input text"
                        value={name}
                        valid={formValid}
                        onChange={handleNameChange}
                    />
                    <Input
                        inputName="Email"
                        labelText="Email"
                        placeholderText="Input text"
                        inputType="email"
                        value={email}
                        valid={formValid}
                        onChange={handleEmailChange}
                    />
                    <Input
                        inputName="Password"
                        labelText="Password"
                        placeholderText="Input text"
                        inputType="password"
                        value={password}
                        valid={formValid}
                        onChange={handlePasswordChange}
                    />
                    <Button buttonText="Register" />
                    <p className="registration-alternate-login">
                        If you have an account you may <a href="#">Login</a>
                    </p>
                </form>
            </div>
        </>
    );
}
