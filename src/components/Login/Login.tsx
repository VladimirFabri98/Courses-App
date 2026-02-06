import { useState } from "react";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";
import "./Login.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [formValid, setFormValid] = useState(true);

    function handleEmailChange(email: string): void {
        setEmail(email);
    }
    function handlePasswordChange(password: string): void {
        setPassword(password);
    }

    function validateLoginForm(e: React.FormEvent): void {
        e.preventDefault();
        email && password ? setFormValid(true) : setFormValid(false);
    }

    return (
        <>
            <h3 className="login-title">Login</h3>
            <div className="login-form-container">
                <form
                    noValidate
                    className="login-form"
                    onSubmit={(e) => validateLoginForm(e)}
                >
                    <Input
                        inputName="Email"
                        labelText="Email"
                        placeholderText="Input text"
                        required={true}
                        inputType="email"
                        value={email}
                        valid={formValid}
                        onChange={handleEmailChange}
                    />
                    <Input
                        inputName="Password"
                        labelText="Password"
                        placeholderText="Input text"
                        required={true}
                        inputType="password"
                        value={password}
                        valid={formValid}
                        onChange={handlePasswordChange}
                    />
                    <Button type="submit">Login</Button>
                    <p className="login-alternate-login">
                        If you don't have an account you may
                        <br></br>
                        <a>Register</a>
                    </p>
                </form>
            </div>
        </>
    );
}
