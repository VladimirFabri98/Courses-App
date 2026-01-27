import Button from "../../common/Button/Button";
import "./CourseInfo.css";

type CourseInfoProps = {
    title: string;
    description: string;
    id: string;
    duration: string;
    created: string;
    authors: string;
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
                <div className="course-description">
                    <h4>Description:</h4>
                    <p>{description}</p>
                </div>
                <div className="separator"></div>
                <div className="course-details">
                    <div className="course-id">
                        <h5>ID:</h5>
                        <p>{id}</p>
                    </div>
                    <div className="course-duration">
                        <h5>Duration:</h5>
                        <p>{duration}</p>
                    </div>
                    <div className="course-created">
                        <h5>Created:</h5>
                        <p>{created}</p>
                    </div>
                    <div className="course-authors">
                        <h5>Authors:</h5>
                        <p>{authors}</p>
                    </div>
                </div>
            </div>
            <Button buttonText="Back" />
        </section>
    );
}
