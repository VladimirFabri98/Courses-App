import { useState } from "react";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";
import "./Registration.css";
import { emailValidation } from "@/helpers/validateEmail";
import { postRequest } from "@/helpers/postRequest";
import { Link, useNavigate } from "react-router-dom";
import { apiUrl } from "@/constants";

export default function Registration() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSucces] = useState(0);
    const [formValid, setFormValid] = useState(true);
    const navigate = useNavigate();

    function handleNameChange(name: string): void {
        setName(name.trimStart());
    }
    function handleEmailChange(email: string): void {
        setEmail(email.trimStart());
    }
    function handlePasswordChange(password: string): void {
        setPassword(password.trimStart());
    }

    async function validateRegistrationForm(e: React.FormEvent) {
        e.preventDefault();
        if (
            !emailValidation(email) ||
            name.trim().length < 2 ||
            password.trim().length < 2
        ) {
            setFormValid(false);
            return;
        }

        setFormValid(true);
        const newUser = { name: name, email: email, password: password };
        const requestResult = await postRequest(`${apiUrl}/register`, newUser);

        if (!requestResult?.successful) setSucces(2);
        setSucces(1);
        setTimeout(() => {
            navigate("/login");
        }, 2000);
    }

    return (
        <div className="registration-main">
            <h3 className="registration-title">Registration</h3>
            <div id="registration" className="registration-form-container">
                <form
                    noValidate
                    className="registration-form"
                    onSubmit={(e) => validateRegistrationForm(e)}
                >
                    <Input
                        inputName="Name"
                        labelText="Name"
                        placeholderText="Input text"
                        required={true}
                        value={name}
                        valid={name ? true : false}
                        formvalid={formValid}
                        onChange={handleNameChange}
                    />
                    <Input
                        inputName="Email"
                        labelText="Email"
                        placeholderText="Input text"
                        required={true}
                        inputType="email"
                        value={email}
                        valid={email ? true : false}
                        formvalid={formValid}
                        onChange={handleEmailChange}
                    />
                    <Input
                        inputName="Password"
                        labelText="Password"
                        placeholderText="Input text"
                        required={true}
                        inputType="password"
                        value={password}
                        valid={password ? true : false}
                        formvalid={formValid}
                        onChange={handlePasswordChange}
                    />
                    <Button type="submit">Register</Button>
                    <p className="registration-alternate-login">
                        If you have an account you may{" "}
                        <Link to={"/login"}>Login</Link>
                    </p>
                </form>
                {success == 1 && (
                    <p className="registration--result-message">
                        User with an email: {email} successfully registered!
                    </p>
                )}
                {success == 2 && (
                    <p className="registration--result-message">
                        Registration failed!
                    </p>
                )}
            </div>
        </div>
    );
}
