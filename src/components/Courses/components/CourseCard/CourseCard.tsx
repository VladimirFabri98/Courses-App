import Button from "../../../../common/Button/Button";
import "./CourseCard.css";
import { getCourseDuration } from "../../../../helpers/getCourseDuration";
import { formatCreationDate } from "../../../../helpers/formatCreationDate";

type CourseCardProps = {
    readonly courseTitle: string;
    readonly courseDescription: string;
    readonly authorsList: string;
    readonly courseDuration: number;
    readonly creationDate: string;
};

export default function CourseCard({
    courseTitle,
    courseDescription,
    authorsList,
    courseDuration,
    creationDate,
}: CourseCardProps) {
    return (
        <li className="card">
            <h3 className="title">{courseTitle}</h3>
            <div className="card-content">
                <p className="card-description">{courseDescription}</p>
                <div className="info-section">
                    <div className="course-info">
                        <p className="course-author">
                            {" "}
                            <strong>Author</strong>: {authorsList}
                        </p>
                        <p className="course-duration">
                            <strong>Duration</strong>:{" "}
                            {courseDuration
                                ? getCourseDuration(courseDuration)
                                : ""}{" "}
                            {Math.trunc(courseDuration / 60) === 1
                                ? "hour"
                                : "hours"}
                        </p>
                        <p className="course-creation-date">
                            <strong>Created</strong>:{" "}
                            {creationDate
                                ? formatCreationDate(creationDate)
                                : ""}
                        </p>
                    </div>
                    <Button buttonText="Show Course" />
                </div>
            </div>
        </li>
    );
}
