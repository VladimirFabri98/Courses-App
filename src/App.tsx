import Courses from "./components/Courses/Courses.tsx";
import { mockedCoursesList, mockedAuthorsList } from "./mockedData.ts";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Registration from "./components/Registration/Registration.tsx";
import Login from "./components/Login/Login.tsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.tsx";

function App() {
    return (
        <Routes>
            <Route path="/registration" element={<Registration />} />
            <Route
                path="/login"
                element={
                    localStorage.getItem("token") ? (
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
                        <Courses
                            mockedCoursesList={mockedCoursesList}
                            mockedAuthorsList={mockedAuthorsList}
                        />
                    </PrivateRoute>
                }
            />
        </Routes>
        // <>
        //     <Header />
        //     {mockedCoursesList.length ? (
        //         <Courses
        //             mockedCoursesList={mockedCoursesList}
        //             mockedAuthorsList={mockedAuthorsList}
        //         />
        //     ) : (
        //         <EmptyCourseList />
        //     )}
        // </>
    );
}

export default App;
