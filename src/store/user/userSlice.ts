import { User } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const userInitialState: User = {
    isAuth: false,
    name: "",
    email: "",
    token: "",
};

const userSlice = createSlice({
    name: "user",
    initialState: userInitialState,
    reducers: {
        userLogin: (_, action) => {
            return {
                isAuth: true,
                name: action.payload.name,
                email: action.payload.email,
                token: action.payload.token,
            };
        },
        userLogout: () => {
            return { isAuth: false, name: "", email: "", token: "" };
        },
    },
});

export const { userLogin, userLogout } = userSlice.actions;
export default userSlice.reducer;
