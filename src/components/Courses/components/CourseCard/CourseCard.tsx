import Button from "../../../../common/Button/Button";
import "./CourseCard.css";
import getCourseDuration from "../../../../helpers/getCourseDuration";
import formatCreationDate from "../../../../helpers/formatCreationDate";
import getAuthorNames from "../../../../helpers/getAuthorNames";
import { Author, Course } from "../../../../types";
import { useNavigate } from "react-router-dom";
import deleteLogo from "./../../../../assets/course-card-trash.svg";
import editCourse from "./../../../../assets/course-card-edit.svg";
import { useDispatch } from "react-redux";
import { deleteCourse } from "@/store/courses/coursesSlice";

type CourseCardProps = {
    readonly course: Course;
    readonly authors: Author[];
};

export default function CourseCard({ course, authors }: CourseCardProps) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    function onShowCourse(id: string) {
        navigate(`/courses/${id}`);
    }

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
                    <div className="course-info-buttons">
                        <Button
                            onClick={() => {
                                onShowCourse(course.id);
                            }}
                        >
                            Show Course
                        </Button>
                        <Button
                            onClick={() => {
                                dispatch(deleteCourse(course));
                            }}
                        >
                            <img src={deleteLogo} alt="Delete course" />
                        </Button>
                        <Button>
                            <img src={editCourse} alt="Edit course" />
                        </Button>
                    </div>
                </div>
            </div>
        </li>
    );
}
