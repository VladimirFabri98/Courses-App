import Button from "../../common/Button/Button";
import Logo from "./components/Logo/Logo";
import logo from "../../assets/header-logo.svg";
import "./Header.css";
import { useNavigate } from "react-router-dom";

type HeaderProps = {
    readonly loggedIn: boolean;
    readonly setLoggedInState: (value: boolean) => void;
};

export default function Header({ loggedIn, setLoggedInState }: HeaderProps) {
    const navigate = useNavigate();

    function onButtonClick() {
        if (loggedIn) {
            setLoggedInState(false);
            localStorage.clear();
            navigate("/login");
        } else {
            navigate("/login");
        }
    }

    return (
        <header className="header">
            <Logo imgSrc={logo} />

            <div className="header-actions">
                {loggedIn && (
                    <p className="header-name">
                        {localStorage.getItem("name")}
                    </p>
                )}

                <Button onClick={onButtonClick}>
                    {loggedIn ? `Logout` : `Login`}
                </Button>
            </div>
        </header>
    );
}
