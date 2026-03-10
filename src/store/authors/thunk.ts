import { addAuthor, getAuthors } from "@/services/services";
import { Author } from "@/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAuthors = createAsyncThunk(
    "authors/fetchAuthors",
    getAuthors
);

export const addNewAuthor = createAsyncThunk(
    "authors/add",
    ({ token, body }: { token: string; body: Author }) =>
        addAuthor(token, JSON.stringify(body))
);
