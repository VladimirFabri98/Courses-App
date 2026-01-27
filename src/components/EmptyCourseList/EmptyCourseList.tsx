import Button from "../../common/Button/Button";
import "./EmptyCourseList.css";

export default function EmptyCourseList() {
    return (
        <main className="empty-courses-main">
            <h3 className="empty-title">{`Course List is Empty`}</h3>
            <h5 className="empty-subtitle">
                {`Please use 'Add New Course' button to add your first course`}
            </h5>
            <Button buttonText="Add new course" />
        </main>
    );
}
