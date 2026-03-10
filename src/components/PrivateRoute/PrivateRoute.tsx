import { User } from "@/types";
import { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute: FC<{ children: React.ReactNode }> = ({ children }) => {
    const user: User = useSelector((state: any) => state.userSlice);
    return user.isAuth ? <>{children}</> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
