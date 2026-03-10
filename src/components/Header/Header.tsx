import Button from "../../common/Button/Button";
import Logo from "./components/Logo/Logo";
import logo from "../../assets/header-logo.svg";
import "./Header.css";
import { useLocation, useNavigate } from "react-router-dom";
import { User } from "@/types";
import { logoutUser } from "@/store/user/thunk";
import { useAppDispatch } from "@/store";

type HeaderProps = {
    user: User;
};

export default function Header({ user }: HeaderProps) {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useAppDispatch();

    async function onButtonClick() {
        if (user.isAuth) {
            if (user.role === "user" && user.token) {
                await dispatch(logoutUser(user.token));
            }
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
