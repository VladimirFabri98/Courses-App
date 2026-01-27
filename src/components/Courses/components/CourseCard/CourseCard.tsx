import Button from "../../../../common/Button/Button";
import "./CourseCard.css";
import getCourseDuration from "../../../../helpers/getCourseDuration";
import formatCreationDate from "../../../../helpers/formatCreationDate";

type CourseCardProps = {
    readonly courseTitle: string;
    readonly courseDescription: string;
    readonly authorsList: string;
    readonly courseDuration: number;
    readonly creationDate: string;
};

export default function CourseCard(props: any) {
    return (
        <li className="card">
            <p>{JSON.stringify(props, null, 2)}</p>
            <h3 className="title">{props.courseTitle}</h3>
            <div className="card-content">
                <p className="card-description">{props.courseDescription}</p>
                <div className="info-section">
                    <div className="course-info">
                        <p className="course-author">
                            {" "}
                            <strong>Author</strong>: {props.authorsList}
                        </p>
                        <p className="course-duration">
                            <strong>Duration</strong>:{" "}
                            {props.courseDuration
                                ? getCourseDuration(props.courseDuration)
                                : ""}
                        </p>
                        <p className="course-creation-date">
                            <strong>Created</strong>:{" "}
                            {props.creationDate
                                ? formatCreationDate(props.creationDate)
                                : ""}
                        </p>
                    </div>
                    <Button buttonText="Show Course" />
                </div>
            </div>
        </li>
    );
}
