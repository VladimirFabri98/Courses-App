import { RootState } from "@/store";
import { User } from "@/types";
import { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute: FC<{ children: React.ReactNode }> = ({ children }) => {
    const user: User = useSelector((state: RootState) => state.userSlice.user);
    return user.role === "admin" ? (
        <>{children}</>
    ) : (
        <Navigate to="/courses" replace />
    );
};

export default PrivateRoute;
