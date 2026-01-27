import CourseInfo from "../CourseInfo/CourseInfo";
import "./Courses.css";
import CourseCard from "./components/CourseCard/CourseCard";
import Utilities from "./components/Utilities/Utilities";

type CoursesProps = {
    readonly mockedCoursesList: {
        id: string;
        title: string;
        description: string;
        authors: string[];
        duration: number;
        creationDate: string;
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
                        <>
                            <CourseCard
                                key={course.id}
                                courseTitle={course.title}
                                courseDescription={course.description}
                                authorsList={course.authors
                                    .map(
                                        (authorId) =>
                                            mockedAuthorsList.find(
                                                (author) =>
                                                    author.id === authorId
                                            )?.name
                                    )
                                    .filter(Boolean)
                                    .join(", ")}
                                courseDuration={course.duration}
                                creationDate={course.creationDate}
                            />
                            <CourseInfo
                                courseID={course.id}
                                courseTitle={course.title}
                                courseDescription={course.description}
                                courseAuthors={course.authors
                                    .map(
                                        (authorId) =>
                                            mockedAuthorsList.find(
                                                (author) =>
                                                    author.id === authorId
                                            )?.name
                                    )
                                    .filter(Boolean)
                                    .join(", ")}
                                courseDuration={course.duration}
                                creationDate={course.creationDate}
                            />
                        </>
                    );
                })}
            </ul>
        </main>
    );
}
