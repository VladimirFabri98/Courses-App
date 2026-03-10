import { configureStore } from "@reduxjs/toolkit";
import authorsSlice from "./authors/authorsSlice";
import coursesSlice from "./courses/coursesSlice";
import userSlice from "./user/userSlice";
import { useDispatch } from "react-redux";

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

const store = configureStore({
    reducer: {
        authorsSlice,
        coursesSlice,
        userSlice,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
