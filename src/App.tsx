import Courses from "./components/Courses/Courses.tsx";
import { mockedCoursesList, mockedAuthorsList } from "./mockedData.ts";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Registration from "./components/Registration/Registration.tsx";
import Login from "./components/Login/Login.tsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.tsx";
import CourseInfo from "./components/CourseInfo/CourseInfo.tsx";
import CreateCourse from "./components/CreateCourse/CreateCourse.tsx";
import { useState } from "react";
import { Author, Course } from "./types.ts";
import Header from "./components/Header/Header.tsx";

function App() {
    const [courseList, setCourseList] = useState<Course[]>(mockedCoursesList);
    const [originalList, setOriginalList] = useState<Course[]>([]);
    const [authorsList, setAuthorsList] = useState<Author[]>(mockedAuthorsList);
    const [loggedIn, setLoggedIn] = useState<boolean>(
        !!localStorage.getItem("token")
    );

    function onLogInChange(loggedIn: boolean) {
        setLoggedIn(loggedIn);
    }

    function onCourseListChange(courses?: Course[], isSearch?: boolean) {
        if (isSearch) {
            setOriginalList(courseList);
            setCourseList([...(courses || [])]);
        } else {
            setCourseList(originalList);
            setOriginalList([]);
        }
    }

    function handleCourseListAddition(course: Course) {
        setCourseList([...courseList, course]);
    }

    function handleAuthorsListChange(authors: Author[]) {
        const seen = new Set<string>();

        const merged = [...authorsList, ...authors].filter((item) => {
            if (seen.has(item.id)) return false;
            seen.add(item.id);
            return true;
        });

        setAuthorsList(merged);
    }

    return (
        <>
            {<Header loggedIn={loggedIn} setLoggedInState={onLogInChange} />}

            <Routes>
                <Route path="/registration" element={<Registration />} />
                <Route
                    path="/login"
                    element={
                        loggedIn ? (
                            <Navigate to={"/courses"} replace />
                        ) : (
                            <Login changeLogginState={onLogInChange} />
                        )
                    }
                />
                <Route
                    path="/courses"
                    element={
                        <PrivateRoute>
                            <Courses
                                courseList={courseList}
                                authorsList={authorsList}
                                handleSetCourseList={onCourseListChange}
                            />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/courses/:courseId"
                    element={
                        <PrivateRoute>
                            <CourseInfo
                                coursesList={courseList}
                                authorsList={authorsList}
                            />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/courses/add"
                    element={
                        <PrivateRoute>
                            <CreateCourse
                                onCreateCourse={handleCourseListAddition}
                                onUpdateAuthors={handleAuthorsListChange}
                                currentAuthorsList={authorsList}
                            />
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
