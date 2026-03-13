import Button from "../../../../common/Button/Button";
import "./CourseCard.css";
import getCourseDuration from "../../../../helpers/getCourseDuration";
import formatCreationDate from "../../../../helpers/formatCreationDate";
import getAuthorNames from "../../../../helpers/getAuthorNames";
import { Author, Course, User } from "../../../../types";
import { useNavigate } from "react-router-dom";
import deleteLogo from "./../../../../assets/course-card-trash.svg";
import editCourse from "./../../../../assets/course-card-edit.svg";
import { deleteCourseById } from "@/store/courses/thunk";
import { useAppDispatch } from "@/store";

type CourseCardProps = {
    readonly course: Course;
    readonly authors: Author[];
    readonly user: User;
};

export default function CourseCard({ course, authors, user }: CourseCardProps) {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    function onShowCourse(id: string) {
        navigate(`/courses/${id}`);
    }

    function onUpdate(id: string) {
        navigate(`/courses/update/${id}`);
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

                    <div
                        className={`course-info-buttons ${user.role !== "admin" ? "single-button-container" : ""}`}
                    >
                        <Button
                            onClick={() => {
                                onShowCourse(course.id);
                            }}
                        >
                            Show Course
                        </Button>
                        {user.role == "admin" && (
                            <>
                                <Button
                                    onClick={() => {
                                        dispatch(
                                            deleteCourseById({
                                                id: course.id,
                                                token: user.token,
                                            })
                                        );
                                    }}
                                >
                                    <img src={deleteLogo} alt="Delete course" />
                                </Button>
                                <Button
                                    onClick={() => {
                                        onUpdate(course.id);
                                    }}
                                >
                                    <img src={editCourse} alt="Edit course" />
                                </Button>{" "}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </li>
    );
}
