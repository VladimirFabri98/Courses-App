import { useState } from "react";
import Input from "../../common/Input/Input";
import "./CreateCourse.css";
import Button from "../../common/Button/Button";
import Duration from "./Duration/Duration";
import AuthorSection from "./AuthorSection/AuthorSection";
import { Author, Course } from "../../types";
import { v4 as uuidv4 } from "uuid";

type CreateCourseProps = {
    readonly onCreateCourse: (course: Course) => void;
    readonly onUpdateAuthors: (authors: Author[]) => void;
};

export default function CreateCourse({
    onCreateCourse,
    onUpdateAuthors,
}: CreateCourseProps) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState(0);
    const [courseAuthorsList, setCourseAuthorsList] = useState<Author[]>([]);
    const [formValid, setFormValid] = useState(true);

    function handleTitleChange(value: string) {
        setTitle(value);
    }

    function handleDescriptionChange(value: string) {
        setDescription(value);
    }

    function handleDurationChange(value: number) {
        const num = typeof value === "number" ? value : Number(value);
        setDuration(Number.isNaN(num) ? 0 : num);
    }

    function clearAllFields() {
        setTitle("");
        setDescription("");
        setDuration(0);
        setCourseAuthorsList([]);
    }

    function validateCreationForm(e: React.FormEvent) {
        e.preventDefault();
        if (
            title.trim().length >= 2 &&
            description.trim().length >= 2 &&
            duration > 0
        ) {
            setFormValid(true);
            createNewCourse();
            clearAllFields();
        } else {
            setFormValid(false);
        }
    }

    function createNewCourse() {
        const newCourseId: string = uuidv4();
        const newCourse: Course = {
            id: newCourseId,
            title: title,
            description: description,
            duration: duration,
            authors: courseAuthorsList.map((author) => author.id),
            creationDate: new Date().toLocaleDateString("en-GB"),
        };
        onCreateCourse(newCourse);
        onUpdateAuthors(courseAuthorsList);
    }

    function getCourseAuthors(): Author[] {
        return courseAuthorsList;
    }

    function handleCourseAuthorsListChange(authors: Author[]) {
        setCourseAuthorsList(authors);
    }

    function handleAddingSingleAuthor(author: Author) {
        setCourseAuthorsList([...courseAuthorsList, author]);
    }

    return (
        <>
            <div className="create-course--container">
                <h3 className="create-course--title">
                    Course Edit/Create Page
                </h3>
                <form
                    id="create-course-form"
                    className="create-course--form"
                    noValidate
                    onSubmit={(e) => validateCreationForm(e)}
                >
                    <h4 className="create-course--subtitle">Main Info</h4>
                    <Input
                        labelText="Title"
                        inputName="Title"
                        placeholderText="Input text"
                        required={true}
                        valid={formValid}
                        value={title}
                        onChange={handleTitleChange}
                        minLength={2}
                    />
                    <Input
                        labelText="Description"
                        inputName="Description"
                        placeholderText="Input text"
                        required={true}
                        valid={formValid}
                        value={description}
                        onChange={handleDescriptionChange}
                        minLength={2}
                        multiline={true}
                    />
                    <Duration
                        duration={duration}
                        formValid={formValid}
                        handleDurationChange={handleDurationChange}
                    />
                    <AuthorSection
                        addAuthor={handleAddingSingleAuthor}
                        getAuthors={getCourseAuthors}
                        updateAuthors={handleCourseAuthorsListChange}
                    />
                </form>
                <div className="create-course--button-container">
                    <Button>Cancel</Button>
                    <Button type="submit" form="create-course-form">
                        Create Course
                    </Button>
                </div>
            </div>
        </>
    );
}
