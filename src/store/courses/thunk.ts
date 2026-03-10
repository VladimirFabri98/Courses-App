import {
    addCourse,
    deleteCourse,
    getCourses,
    updateCourse,
} from "@/services/services";
import { Course } from "@/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCourses = createAsyncThunk(
    "courses/fetchCourses",
    getCourses
);

export const addNewCourse = createAsyncThunk(
    "courses/add",
    ({ token, body }: { token: string; body: Course }) =>
        addCourse(token, JSON.stringify(body))
);

export const updateCurrentCourse = createAsyncThunk(
    "courses/update",
    ({ token, body, id }: { token: string; body: Course; id: string }) =>
        updateCourse(token, JSON.stringify(body), id)
);

export const deleteCourseById = createAsyncThunk(
    "courses/delete",
    ({ id, token }: { id: string; token: string }) => deleteCourse(token, id)
);
