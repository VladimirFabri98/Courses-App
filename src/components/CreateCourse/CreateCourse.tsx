import { useState } from "react";
import Input from "../../common/Input/Input";
import "./CreateCourse.css";
import Button from "../../common/Button/Button";
import Duration from "./Duration/Duration";
import AuthorSection from "./AuthorSection/AuthorSection";

export default function CreateCourse() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState(0);
    const [authorName, setAuthorName] = useState("");
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

    function handleAuthorChange(value: string) {
        setAuthorName(value);
    }

    function validateLoginForm(e: React.FormEvent) {
        e.preventDefault();
        title.trim().length >= 2 &&
        description.trim().length >= 2 &&
        duration > 0
            ? setFormValid(true)
            : setFormValid(false);
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
                    onSubmit={(e) => validateLoginForm(e)}
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
                        authorName={authorName}
                        onAuthorNameChange={handleAuthorChange}
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
