import Button from "../../../common/Button/Button";
import Input from "../../../common/Input/Input";
import AuthorItem from "../AuthorItem/AuthorItem";
import "./AuthorSection.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Author } from "../../../types";

type AuthorSectionProps = {
    readonly getCourseAuthors: () => Author[];
    readonly updateCourseAuthors: (authors: Author[]) => void;
    readonly addCourseAuthor: (author: Author) => void;
    readonly getAuthorsList: () => Author[];
    readonly updateAuthorsList: (authors: Author[]) => void;
};

export default function AuthorSection({
    getCourseAuthors,
    updateCourseAuthors,
    addCourseAuthor,
    getAuthorsList,
    updateAuthorsList,
}: AuthorSectionProps) {
    const [authorName, setAuthorName] = useState("");
    const [isValidInput, setIsValidInput] = useState(true);

    function onAuthorNameChange(value: string) {
        setAuthorName(value.trimStart());
    }

    function handleAddingNewAuthor(): void {
        if (!(authorName.trim().length >= 2)) {
            setIsValidInput(false);
        } else {
            setIsValidInput(true);
            const newAuthorId = uuidv4();
            const newAuthor = { id: newAuthorId, name: authorName };
            const newList = [...getAuthorsList(), newAuthor];
            onAuthorNameChange("");
            updateAuthorsList(newList);
        }
    }

    function onAddingFromListToCourses(authorId: string) {
        const author = getAuthorsList().find((a) => a.id === authorId);
        if (!author) return;

        const updatedAuthorsList = getAuthorsList().filter(
            (listAuthor) => listAuthor.id !== authorId
        );
        updateAuthorsList(updatedAuthorsList);
        addCourseAuthor(author);
    }

    function onRemovalFromList(authorId: string) {
        const author = getCourseAuthors().find((a) => a.id === authorId);
        if (!author) return;

        const updatedCoursesList = getCourseAuthors().filter(
            (courseAuthor) => courseAuthor.id !== authorId
        );
        updateCourseAuthors(updatedCoursesList);
        updateAuthorsList([...getAuthorsList(), author]);
    }

    return (
        <div className="author-section--container">
            <div className="author-section--authors-list">
                <h4 className="author-section--title">Authors</h4>
                <div className="author-section--create-section">
                    <Input
                        inputName="Author Name"
                        labelText="Author Name"
                        placeholderText="Input text"
                        valid={isValidInput}
                        required={false}
                        value={authorName}
                        onChange={onAuthorNameChange}
                        minLength={2}
                    />
                    <Button type="button" onClick={handleAddingNewAuthor}>
                        Create Author
                    </Button>
                </div>
                <h5 className="author-section--subtitle">Authors List</h5>
                <ul className="author-section--authors-list">
                    {getAuthorsList().map((author) => (
                        <AuthorItem
                            author={author}
                            adding={true}
                            key={author.id}
                            onButtonClick={() =>
                                onAddingFromListToCourses(author.id)
                            }
                        />
                    ))}
                </ul>
            </div>
            <div className="author-section--course-authors">
                <h4 className="author-section--title">Course Authors</h4>
                {getCourseAuthors().length ? (
                    <ul className="author-section--authors-list">
                        {getCourseAuthors().map((author) => (
                            <AuthorItem
                                key={author.id}
                                adding={false}
                                author={author}
                                onButtonClick={() =>
                                    onRemovalFromList(author.id)
                                }
                            />
                        ))}
                    </ul>
                ) : (
                    <p className="author-section--no-authors">
                        Author list is empty
                    </p>
                )}
            </div>
        </div>
    );
}
