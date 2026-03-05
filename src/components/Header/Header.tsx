import Button from "../../common/Button/Button";
import Logo from "./components/Logo/Logo";
import logo from "../../assets/header-logo.svg";
import "./Header.css";
import { useLocation, useNavigate } from "react-router-dom";
import { User } from "@/types";
import { useDispatch } from "react-redux";
import { userLogout } from "@/store/user/userSlice";

type HeaderProps = {
    user: User;
};

export default function Header({ user }: HeaderProps) {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    function onButtonClick() {
        if (user.isAuth) {
            dispatch(userLogout());
            localStorage.clear();
        }
        navigate("/login");
    }

    return (
        <header className="header">
            <Logo imgSrc={logo} />

            {!["/login", "/registration"].includes(location.pathname) && (
                <div className="header-actions">
                    <p className="header-name">{user.name}</p>

                    <Button onClick={onButtonClick}>Logout</Button>
                </div>
            )}
        </header>
    );
}
