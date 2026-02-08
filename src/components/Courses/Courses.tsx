import { useState } from "react";
import { Author, Course } from "../../types";
import CreateCourse from "../CreateCourse/CreateCourse";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import CourseCard from "./components/CourseCard/CourseCard";
import Utilities from "./components/Utilities/Utilities";
import "./Courses.css";

type CoursesProps = {
    readonly mockedCoursesList: Course[];
    readonly mockedAuthorsList: Author[];
};

export default function Courses({
    mockedCoursesList,
    mockedAuthorsList,
}: CoursesProps) {
    const [courseList, setCourseList] = useState<Course[]>(mockedCoursesList);
    const [authorsList, setAuthorsList] = useState<Author[]>(mockedAuthorsList);

    function handleCourseListChange(course: Course) {
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

    function handleSearch(searchString: string) {
        const filteredCourses = courseList.filter((course) => {
            if (
                course.title
                    .toLowerCase()
                    .includes(searchString.toLowerCase()) ||
                course.id.toLowerCase().includes(searchString.toLowerCase())
            )
                return course;
        });
        setCourseList([...filteredCourses]);
    }

    function handleSearchCleared() {
        setCourseList([...mockedCoursesList]);
    }

    return (
        <main className="courses-main">
            <Utilities
                onSearch={handleSearch}
                onSearchCleared={handleSearchCleared}
            />
            <ul className="courses-list">
                {courseList.map((course) => {
                    return (
                        <CourseCard
                            key={course.id}
                            course={course}
                            authors={authorsList}
                        />
                    );
                })}
            </ul>
            <CreateCourse
                onCreateCourse={handleCourseListChange}
                onUpdateAuthors={handleAuthorsListChange}
            />
            <Login />
            <Registration />
        </main>
    );
}
