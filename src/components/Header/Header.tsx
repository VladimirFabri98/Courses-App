import Button from "../../common/Button/Button";
import Logo from "./components/Logo/Logo";
import logo from "../../assets/header-logo.svg";
import "./Header.css";

export default function Header() {
    return (
        <header className="header">
            <Logo imgSrc={logo} />
            <Button>Login</Button>
        </header>
    );
}
