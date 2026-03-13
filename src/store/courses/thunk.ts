import {
    addCourse,
    deleteCourse,
    getCourses,
    updateCourse,
} from "@/services/services";
import { CourseDto } from "@/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCourses = createAsyncThunk(
    "courses/fetchCourses",
    getCourses
);

export const addNewCourse = createAsyncThunk(
    "courses/add",
    ({ token, body }: { token: string; body: CourseDto }) =>
        addCourse(token, JSON.stringify(body))
);

export const updateCurrentCourse = createAsyncThunk(
    "courses/update",
    ({ token, body, id }: { token: string; body: CourseDto; id: string }) =>
        updateCourse(token, JSON.stringify(body), id)
);

export const deleteCourseById = createAsyncThunk(
    "courses/delete",
    ({ id, token }: { id: string; token: string }) => deleteCourse(token, id)
);
