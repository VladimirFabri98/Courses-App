import Button from "../../common/Button/Button";
import formatCreationDate from "../../helpers/formatCreationDate";
import getCourseDuration from "../../helpers/getCourseDuration";
import "./CourseInfo.css";
import getAuthorNames from "../../helpers/getAuthorNames";
import { useNavigate, useParams } from "react-router-dom";
import { Author, Course } from "@/types";

type CourseInfoProps = {
    readonly coursesList: Course[];
    readonly authorsList: Author[];
};

export default function CourseInfo({
    coursesList,
    authorsList,
}: CourseInfoProps) {
    const params = useParams();
    const navigate = useNavigate();
    const course = coursesList.find((course) => course.id === params.courseId);

    function onBack() {
        navigate("/courses");
    }

    return (
        <section className="course-info-section">
            <h3>{course?.title}</h3>
            <div className="course-info-container">
                <div className="course-info-description">
                    <h4>Description:</h4>
                    <p>{course?.description}</p>
                </div>
                <div className="separator"></div>
                <div className="course-info-details">
                    <div className="course-info-id detail-subsection">
                        <h5 className="course-info--detail-subtitle">ID:</h5>
                        <p>{course?.id}</p>
                    </div>
                    <div className="course-info-duration detail-subsection">
                        <h5 className="course-info--detail-subtitle">
                            Duration:{" "}
                        </h5>
                        <p>{getCourseDuration(course?.duration || 0)}</p>
                    </div>
                    <div className="course-info-created detail-subsection">
                        <h5 className="course-info--detail-subtitle">
                            Created:{" "}
                        </h5>
                        <p>{formatCreationDate(course?.creationDate || "")}</p>
                    </div>
                    <div className="course-info-authors detail-subsection">
                        <h5 className="course-info--detail-subtitle">
                            Authors:{" "}
                        </h5>
                        <p>
                            {getAuthorNames(course?.authors || [], authorsList)}
                        </p>
                    </div>
                </div>
            </div>
            <Button onClick={onBack}>Back</Button>
        </section>
    );
}
