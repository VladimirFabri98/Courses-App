import Button from "../../common/Button/Button";
import { formatCreationDate } from "../../helpers/formatCreationDate";
import { getCourseDuration } from "../../helpers/getCourseDuration";
import "./CourseInfo.css";

type CourseInfoProps = {
    readonly title: string;
    readonly description: string;
    readonly id: string;
    readonly duration: number;
    readonly created: string;
    readonly authors: string;
};

export default function CourseInfo({
    title,
    description,
    id,
    duration,
    created,
    authors,
}: CourseInfoProps) {
    return (
        <section className="course-info-section">
            <h3>{title}</h3>
            <div className="course-info-container">
                <div className="course-info-description">
                    <h4>Description:</h4>
                    <p>{description}</p>
                </div>
                <div className="separator"></div>
                <div className="course-info-details">
                    <div className="course-info-id">
                        <h5>ID:</h5>
                        <p>{id}</p>
                    </div>
                    <div className="course-info-duration">
                        <h5>Duration:</h5>
                        <p>{getCourseDuration(duration)}</p>
                    </div>
                    <div className="course-info-created">
                        <h5>Created:</h5>
                        <p>{formatCreationDate(created)}</p>
                    </div>
                    <div className="course-info-authors">
                        <h5>Authors:</h5>
                        <p>{authors}</p>
                    </div>
                </div>
            </div>
            <Button buttonText="Back" />
        </section>
    );
}
