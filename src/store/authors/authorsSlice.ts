import { Author } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAuthors } from "@/services/services";

const authorsInitialState = {
    authorsData: [] as Author[],
    authorsStatus: "idle",
    error: null as string | null,
};

export const fetchAuthors = createAsyncThunk(
    "authors/fetchAuthors",
    getAuthors
);

const authorsSlice = createSlice({
    name: "authors",
    initialState: authorsInitialState,
    reducers: {
        saveAuthor: (state, action) => {
            state.authorsData.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        (builder.addCase(fetchAuthors.pending, (state) => {
            state.authorsStatus = "loading";
        }),
            builder.addCase(fetchAuthors.fulfilled, (state, action) => {
                ((state.authorsStatus = "succeeded"),
                    (state.authorsData = action.payload.result));
            }),
            builder.addCase(fetchAuthors.rejected, (state, action) => {
                ((state.authorsStatus = "failed"),
                    (state.error = action.error.message ?? "failed to fetch"));
            }));
    },
});

export const { saveAuthor } = authorsSlice.actions;
export default authorsSlice.reducer;
