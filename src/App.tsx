import Courses from "./components/Courses/Courses.tsx";
import EmptyCourseList from "./components/EmptyCourseList/EmptyCourseList.tsx";
import Header from "./components/Header/Header.tsx";
import { mockedCoursesList, mockedAuthorsList } from "./mockedData.ts";
import "./App.css";

function App() {
    return (
        <>
            <Header />
            {mockedCoursesList.length ? (
                <Courses
                    mockedCoursesList={mockedCoursesList}
                    mockedAuthorsList={mockedAuthorsList}
                />
            ) : (
                <EmptyCourseList />
            )}
        </>
    );
}

export default App;
