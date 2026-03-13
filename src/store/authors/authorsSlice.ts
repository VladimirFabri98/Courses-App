import { Author } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { addNewAuthor, fetchAuthors } from "./thunk";

const authorsInitialState = {
    authorsData: [] as Author[],
    authorsStatus: "idle",
    error: null as string | null,
};

const authorsSlice = createSlice({
    name: "authors",
    initialState: authorsInitialState,
    reducers: {
        // saveAuthor: (state, action) => {
        //     state.authorsData.push(action.payload);
        // },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAuthors.pending, (state) => {
            state.authorsStatus = "loading";
        });
        builder.addCase(fetchAuthors.fulfilled, (state, action) => {
            state.authorsStatus = "succeeded";
            state.authorsData = action.payload.result;
        });
        builder.addCase(fetchAuthors.rejected, (state, action) => {
            state.authorsStatus = "failed";
            state.error = action.error.message ?? "failed to fetch";
        });
        builder.addCase(addNewAuthor.fulfilled, (state, action) => {
            state.authorsData.push(action.payload.result);
            state.authorsStatus = "added";
        });
        builder.addCase(addNewAuthor.pending, (state) => {
            state.authorsStatus = "adding";
        });
        builder.addCase(addNewAuthor.rejected, (state, action) => {
            state.authorsStatus = "failed";
            state.error = action.error.message ?? "failed to add";
        });
    },
});

// export const { saveAuthor } = authorsSlice.actions;
export default authorsSlice.reducer;
