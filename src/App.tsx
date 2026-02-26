import Courses from "./components/Courses/Courses.tsx";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Registration from "./components/Registration/Registration.tsx";
import Login from "./components/Login/Login.tsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.tsx";
import CourseInfo from "./components/CourseInfo/CourseInfo.tsx";
import CreateCourse from "./components/CreateCourse/CreateCourse.tsx";
import Header from "./components/Header/Header.tsx";
import { useSelector } from "react-redux";
import { User } from "./types.ts";

function App() {
    const user: User = useSelector((state: any) => state.userSlice);

    return (
        <>
            {<Header user={user} />}

            <Routes>
                <Route path="/registration" element={<Registration />} />
                <Route
                    path="/login"
                    element={
                        user.isAuth ? (
                            <Navigate to={"/courses"} replace />
                        ) : (
                            <Login />
                        )
                    }
                />
                <Route
                    path="/courses"
                    element={
                        <PrivateRoute>
                            <Courses />
                        </PrivateRoute>
                    }
                />
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
