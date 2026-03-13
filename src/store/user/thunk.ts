import { getCurrentUser, logout } from "@/services/services";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCurrentUserData = createAsyncThunk(
    "user/currentUser",
    getCurrentUser
);

export const logoutUser = createAsyncThunk("user/logout", logout);
