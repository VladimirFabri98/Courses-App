import Courses from "./components/Courses/Courses.tsx";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Registration from "./components/Registration/Registration.tsx";
import Login from "./components/Login/Login.tsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.tsx";
import CourseInfo from "./components/CourseInfo/CourseInfo.tsx";
import CreateCourse from "./components/CourseForm/CourseForm.tsx";
import Header from "./components/Header/Header.tsx";
import { useSelector } from "react-redux";
import { User } from "./types.ts";
import { RootState } from "./store/index.ts";

function App() {
    const user: User = useSelector((state: RootState) => state.userSlice.user);

    return (
        <>
            {<Header user={user} />}

            <Routes>
                <Route path="/registration" element={<Registration />} />
                <Route
                    path="/login"
                    element={
                        // user.isAuth ? (
                        //     <Navigate to={"/courses"} replace />
                        // ) : (
                        //     <Login />
                        // )
                        <Login />
                    }
                />
                <Route path="/courses" element={<Courses />} />
                <Route
                    path="/courses/:courseId"
                    element={
                        <PrivateRoute>
                            <CourseInfo />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/courses/add"
                    element={
                        <PrivateRoute>
                            <CreateCourse />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="*"
                    element={<Navigate to={"/courses"}></Navigate>}
                />
            </Routes>
        </>
    );
}

export default App;
