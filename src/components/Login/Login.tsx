import { useState } from "react";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { emailValidation } from "@/helpers/validateEmail";
import { postRequest } from "@/helpers/postRequest";

type LoginProps = {
    readonly changeLogginState: (value: boolean) => void;
};

export default function Login({ changeLogginState }: LoginProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [formValid, setFormValid] = useState(true);
    const navigate = useNavigate();

    function handleEmailChange(email: string): void {
        setEmail(email.trimStart());
    }
    function handlePasswordChange(password: string): void {
        setPassword(password.trimStart());
    }

    async function validateLoginForm(e: React.FormEvent) {
        e.preventDefault();
        if (!emailValidation(email) || password.trim().length < 2) {
            setFormValid(false);
            return;
        }

        setFormValid(true);
        const loginValue = { email: email, password: password };
        const requestResult = await postRequest(
            "http://localhost:4000/login",
            loginValue
        );
        if (!requestResult?.successful) return;
        setTimeout(() => {
            localStorage.setItem("token", requestResult.result);
            localStorage.setItem("name", requestResult.user.name);
            changeLogginState(true);
            navigate("/courses");
        }, 2000);
    }

    return (
        <div className="login-main">
            <h3 className="login-title">Login</h3>
            <div id="login" className="login-form-container">
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
                    <Button type="submit">Login</Button>
                    <p className="login-alternate-login">
                        If you don't have an account you may
                        <br></br>
                        <Link to={"/registration"}>Register</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
