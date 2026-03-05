import { Course } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCourses } from "@/services/services";

const coursesInitialState = {
    courseData: [] as Course[],
    status: "idle",
    error: null as string | null,
};

export const fetchCourses = createAsyncThunk(
    "courses/fetchCourses",
    getCourses
);

const coursesSlice = createSlice({
    name: "courses",
    initialState: coursesInitialState,
    reducers: {
        saveCourse: (state, action) => {
            state.courseData.push(action.payload);
        },
        updateCourse: (state, action) => {
            const index = state.courseData.findIndex(
                (course: Course) => course.id === action.payload.id
            );
            if (index !== -1) {
                state.courseData[index] = action.payload;
            }
        },
        deleteCourse: (state, action) => {
            state.courseData = state.courseData.filter(
                (course: Course) => course.id !== action.payload.id
            );
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCourses.pending, (state, _) => {
            state.status = "loading";
        });

        builder.addCase(fetchCourses.fulfilled, (state, action) => {
            state.courseData = action.payload.result;
            state.status = "succeeded";
        });

        builder.addCase(fetchCourses.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message ?? "failed to fetch";
        });
    },
});

export const { saveCourse, updateCourse, deleteCourse } = coursesSlice.actions;
export default coursesSlice.reducer;
