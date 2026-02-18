import { Author, Course } from "../../types";
import CourseCard from "./components/CourseCard/CourseCard";
import Utilities from "./components/Utilities/Utilities";
import "./Courses.css";

type CoursesProps = {
    readonly courseList: Course[];
    readonly authorsList: Author[];
    readonly handleSetCourseList: (
        courseList?: Course[],
        isSearch?: boolean
    ) => void;
};

export default function Courses({
    courseList,
    authorsList,
    handleSetCourseList,
}: CoursesProps) {
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
        handleSetCourseList(filteredCourses, true);
    }

    function handleSearchCleared() {
        handleSetCourseList(undefined, false);
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
        </main>
    );
}
