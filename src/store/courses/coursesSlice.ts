import { Course } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import {
    addNewCourse,
    deleteCourseById,
    fetchCourses,
    updateCurrentCourse,
} from "./thunk";

const coursesInitialState = {
    courseData: [] as Course[],
    status: "idle",
    error: null as string | null,
};

const coursesSlice = createSlice({
    name: "courses",
    initialState: coursesInitialState,
    reducers: {
        // saveCourse: (state, action) => {
        //     state.courseData.push(action.payload);
        // },
        // updateCourse: (state, action) => {
        //     const index = state.courseData.findIndex(
        //         (course: Course) => course.id === action.payload.id
        //     );
        //     if (index !== -1) {
        //         state.courseData[index] = action.payload;
        //     }
        // },
        // deleteCourse: (state, action) => {
        //     state.courseData = state.courseData.filter(
        //         (course: Course) => course.id !== action.payload.id
        //     );
        // },
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

        builder.addCase(addNewCourse.fulfilled, (state, action) => {
            state.courseData.push(action.payload.result);
            state.status = "added";
        });

        builder.addCase(addNewCourse.pending, (state) => {
            state.status = "adding";
        });

        builder.addCase(addNewCourse.rejected, (state, action) => {
            state.error = action.error.message ?? "unable to add new resource";
            state.status = "failed";
        });

        builder.addCase(updateCurrentCourse.fulfilled, (state, action) => {
            const index = state.courseData.findIndex(
                (course: Course) => course.id === action.payload.result.id
            );
            if (index !== -1) {
                state.courseData[index] = action.payload.result;
            }
            state.status = "updated";
        });
        builder.addCase(updateCurrentCourse.pending, (state) => {
            state.status = "updating";
        });
        builder.addCase(updateCurrentCourse.rejected, (state, action) => {
            state.error =
                action.error.message ?? "unable to update current resource";
            state.status = "failed";
        });

        builder.addCase(deleteCourseById.fulfilled, (state, action) => {
            const courseId = action.payload.result.split(" ")[4];
            state.courseData = state.courseData.filter(
                (course) => course.id !== courseId
            );
            state.status = "deleted";
        });

        builder.addCase(deleteCourseById.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message ?? "failed to delete";
        });
    },
});

// export const { updateCourse, deleteCourse } = coursesSlice.actions;
export default coursesSlice.reducer;
