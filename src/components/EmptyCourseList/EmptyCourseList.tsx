import { useNavigate } from "react-router-dom";
import Button from "../../common/Button/Button";
import "./EmptyCourseList.css";

type EmptyCourseListProps = {
    readonly userRole: string;
};

export default function EmptyCourseList({ userRole }: EmptyCourseListProps) {
    const navigate = useNavigate();

    return (
        <main className="empty-courses-main">
            <h3 className="empty-title">{`Course List is Empty`}</h3>
            <h5 className="empty-subtitle">
                {`Please use "Add New Course" button to add your first course`}
            </h5>
            {userRole === "admin" ? (
                <Button
                    onClick={() => {
                        navigate("/courses/add");
                    }}
                >
                    Add new course
                </Button>
            ) : (
                <h5 className="empty-subtitle empty-no-permission">
                    You don't have permissions to create a course. <br></br>{" "}
                    Please log in as ADMIN" is displayed instead of 'ADD NEW
                    COURSE' button.
                </h5>
            )}
        </main>
    );
}
