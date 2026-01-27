import Button from "../../../../common/Button/Button";
import "./CourseCard.css";
import { getCourseDuration } from "../../../../helpers/getCourseDuration";
import { formatCreationDate } from "../../../../helpers/formatCreationDate";

type CourseCardProps = {
    readonly title: string;
    readonly description: string;
    readonly author: string;
    readonly duration: number;
    readonly created: string;
};

export default function CourseCard({
    title,
    description,
    author,
    duration,
    created,
}: CourseCardProps) {
    return (
        <li className="card">
            <h3 className="title">{title}</h3>
            <div className="card-content">
                <p className="card-description">{description}</p>
                <div className="info-section">
                    <div className="course-info">
                        <p className="course-author">
                            {" "}
                            <strong>Author</strong>: {author}
                        </p>
                        <p className="course-duration">
                            <strong>Duration</strong>:{" "}
                            {duration ? getCourseDuration(duration) : ""}{" "}
                            {Math.trunc(duration / 60) === 1 ? "hour" : "hours"}
                        </p>
                        <p className="course-creation-date">
                            <strong>Created</strong>:{" "}
                            {created ? formatCreationDate(created) : ""}
                        </p>
                    </div>
                    <Button buttonText="Show Course" />
                </div>
            </div>
        </li>
    );
}
