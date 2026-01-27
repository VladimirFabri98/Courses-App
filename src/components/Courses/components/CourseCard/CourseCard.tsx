import Button from "../../../../common/Button/Button";
import "./CourseCard.css";
import getCourseDuration from "../../../../helpers/getCourseDuration";
import formatCreationDate from "../../../../helpers/formatCreationDate";
import getAuthorNames from "../../../../helpers/getAuthorNames";

export type Author = {
    id: string;
    name: string;
};

export type Course = {
    id: string;
    title: string;
    description: string;
    creationDate: string;
    duration: number;
    authors: string[];
};

type CourseCardProps = {
    readonly course: Course;
    readonly authors: Author[];
};

export default function CourseCard({ course, authors }: CourseCardProps) {
    return (
        <li className="card">
            <h3 className="title">{course.title}</h3>
            <div className="card-content">
                <p className="card-description">{course.description}</p>
                <div className="info-section">
                    <div className="course-info">
                        <p className="course-author">
                            <strong>Author: </strong>
                            {getAuthorNames(course.authors, authors)}
                        </p>
                        <p className="course-duration">
                            <strong>Duration: </strong>
                            {getCourseDuration(course.duration)}
                        </p>
                        <p className="course-creation-date">
                            <strong>Created: </strong>
                            {formatCreationDate(course.creationDate)}
                        </p>
                    </div>
                    <Button buttonText="Show Course" />
                </div>
            </div>
        </li>
    );
}
