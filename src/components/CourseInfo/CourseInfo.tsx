import Button from "../../common/Button/Button";
import formatCreationDate from "../../helpers/formatCreationDate";
import getCourseDuration from "../../helpers/getCourseDuration";
import "./CourseInfo.css";
import { Author, Course } from "../../types";
import getAuthorNames from "../../helpers/getAuthorNames";

type CourseInfoProps = {
    readonly courses: Course[];
    readonly authors: Author[];
    readonly showCourseId: string;
};

export default function CourseInfo({ courses, authors }: CourseInfoProps) {
    return (
        <section className="course-info-section">
            <h3>{courses[0].title}</h3>
            <div className="course-info-container">
                <div className="course-info-description">
                    <h4>Description:</h4>
                    <p>{courses[0].description}</p>
                </div>
                <div className="separator"></div>
                <div className="course-info-details">
                    <div className="course-info-id">
                        <h5>ID:</h5>
                        <p>{courses[0].id}</p>
                    </div>
                    <div className="course-info-duration">
                        <h5>Duration: </h5>
                        <p>{getCourseDuration(courses[0].duration)}</p>
                    </div>
                    <div className="course-info-created">
                        <h5>Created: </h5>
                        <p>{formatCreationDate(courses[0].creationDate)}</p>
                    </div>
                    <div className="course-info-authors">
                        <h5>Authors: </h5>
                        <p>{getAuthorNames(courses[0].authors, authors)}</p>
                    </div>
                </div>
            </div>
            <Button>Back</Button>
        </section>
    );
}
