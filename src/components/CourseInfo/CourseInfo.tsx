import Button from "../../common/Button/Button";
import { formatCreationDate } from "../../helpers/formatCreationDate";
import { getCourseDuration } from "../../helpers/getCourseDuration";
import "./CourseInfo.css";

type CourseInfoProps = {
    readonly courseTitle: string;
    readonly courseDescription: string;
    readonly courseID: string;
    readonly courseDuration: number;
    readonly creationDate: string;
    readonly courseAuthors: string;
};

export default function CourseInfo({
    courseTitle,
    courseDescription,
    courseID,
    courseDuration,
    creationDate,
    courseAuthors,
}: CourseInfoProps) {
    return (
        <section className="course-info-section">
            <h3>{courseTitle}</h3>
            <div className="course-info-container">
                <div className="course-info-description">
                    <h4>Description:</h4>
                    <p>{courseDescription}</p>
                </div>
                <div className="separator"></div>
                <div className="course-info-details">
                    <div className="course-info-id">
                        <h5>ID:</h5>
                        <p>{courseID}</p>
                    </div>
                    <div className="course-info-duration">
                        <h5>Duration:</h5>
                        <p>{getCourseDuration(courseDuration)}</p>
                    </div>
                    <div className="course-info-created">
                        <h5>Created:</h5>
                        <p>{formatCreationDate(creationDate)}</p>
                    </div>
                    <div className="course-info-authors">
                        <h5>Authors:</h5>
                        <p>{courseAuthors}</p>
                    </div>
                </div>
            </div>
            <Button buttonText="Back" />
        </section>
    );
}
