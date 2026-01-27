import "./Courses.css";
import CourseCard from "./components/CourseCard/CourseCard";
import Utilities from "./components/Utilities/Utilities";

type CoursesProps = {
    mockedCoursesList: {
        id: string;
        title: string;
        description: string;
        authors: string[];
        duration: number;
        creationDate: string;
    }[];
    mockedAuthorsList: {
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
                            title={course.title}
                            description={course.description}
                            author={course.authors
                                .map(
                                    (authorId) =>
                                        mockedAuthorsList.find(
                                            (author) => author.id === authorId
                                        )?.name
                                )
                                .filter(Boolean)
                                .join(", ")}
                            duration={course.duration}
                            created={course.creationDate}
                        />
                    );
                })}
            </ul>
        </main>
    );
}
