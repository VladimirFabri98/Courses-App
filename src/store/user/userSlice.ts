import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUserData, logoutUser } from "./thunk";
import { User } from "@/types";

const userInitialState = {
    user: {} as User,
    userStatus: "idle",
    error: null as string | null,
};

const userLoggedOutState = {
    isAuth: false,
    name: "",
    email: "",
    token: "",
    role: "",
};

const userSlice = createSlice({
    name: "user",
    initialState: userInitialState,
    reducers: {
        userLogin: (state, action) => {
            state.user = {
                isAuth: true,
                name: action.payload.name,
                email: action.payload.email,
                token: action.payload.token,
                role: action.payload.role,
            };
        },
        // userLogout: (state) => {
        //     state.user = userLoggedOutState;
        // },
    },
    extraReducers: (builder) => {
        builder.addCase(getCurrentUserData.fulfilled, (state, action) => {
            const user = Array.isArray(action.payload.result)
                ? action.payload.result[0]
                : action.payload.result;
            state.user.name = user?.name;
            state.user.email = user?.email;
            state.user.isAuth = true;
            state.user.token = user?.token;
            state.user.role = user?.role;

            state.userStatus = "succeeded";
        });
        builder.addCase(getCurrentUserData.rejected, (state, action) => {
            state.userStatus = "failed";
            state.error = action.error.message ?? "API call failed";
        });
        builder.addCase(getCurrentUserData.pending, (state) => {
            state.userStatus = "loading";
        });

        builder.addCase(logoutUser.fulfilled, (state) => {
            state.user = userLoggedOutState;
            state.userStatus = "idle";
        });

        builder.addCase(logoutUser.rejected, (state, action) => {
            state.userStatus = "failed";
            state.error = action.error.message ?? "failed to logout";
        });
    },
});

export const { userLogin } = userSlice.actions;
export default userSlice.reducer;
