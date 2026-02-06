import CreateCourse from "../CreateCourse/CreateCourse";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import CourseCard from "./components/CourseCard/CourseCard";
import Utilities from "./components/Utilities/Utilities";
import "./Courses.css";

type CoursesProps = {
    readonly mockedCoursesList: {
        id: string;
        title: string;
        description: string;
        creationDate: string;
        duration: number;
        authors: string[];
    }[];
    readonly mockedAuthorsList: {
        id: string;
        name: string;
    }[];
};

export default function Courses({
    mockedCoursesList,
    mockedAuthorsList,
}: CoursesProps) {
    return (
        <main className="courses-main">
            <Utilities />
            <ul className="courses-list">
                {mockedCoursesList.map((course) => {
                    return (
                        <CourseCard
                            key={course.id}
                            course={course}
                            authors={mockedAuthorsList}
                        />
                    );
                })}
            </ul>
            <CreateCourse />
            <Login />
            <Registration />
        </main>
    );
}
