import Button from "../../../common/Button/Button";
import Input from "../../../common/Input/Input";
import AuthorItem from "../../AuthorItem/AuthorItem";
import "./AuthorSection.css";
import { mockedAuthorsList } from "../../../mockedData";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Author } from "../../../types";

type AuthorSectionProps = {
    readonly getAuthors: () => Author[];
    readonly updateAuthors: (authors: Author[]) => void;
    readonly addAuthor: (author: Author) => void;
};

export default function AuthorSection({
    getAuthors,
    updateAuthors,
    addAuthor,
}: AuthorSectionProps) {
    const [authorsList, setAuthorsList] = useState(mockedAuthorsList);
    const [authorName, setAuthorName] = useState("");
    const [isValidInput, setIsValidInput] = useState(true);

    function onAuthorNameChange(value: string) {
        setAuthorName(value);
    }

    function handleAddingNewAuthor(): void {
        if (!(authorName.trim().length >= 2)) {
            setIsValidInput(false);
        } else {
            setIsValidInput(true);
            const newAuthorId = uuidv4();
            const newAuthor = { id: newAuthorId, name: authorName };
            const newList = [...authorsList, newAuthor];
            onAuthorNameChange("");
            setAuthorsList(newList);
        }
    }

    function onAddingFromListToCourses(author: Author) {
        const updatedAuthorsList = authorsList.filter(
            (listAuthor) => listAuthor.id !== author.id
        );
        setAuthorsList(updatedAuthorsList);
        addAuthor(author);
    }

    function onRemovalFromList(author: Author) {
        const updatedCoursesList = getAuthors().filter(
            (courseAuthor) => courseAuthor.id !== author.id
        );
        updateAuthors(updatedCoursesList);
        setAuthorsList([...authorsList, author]);
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
                    {authorsList.map((author) => (
                        <AuthorItem
                            author={author}
                            adding={true}
                            key={author.id}
                            onButtonClick={() =>
                                onAddingFromListToCourses(author)
                            }
                        />
                    ))}
                </ul>
            </div>
            <div className="author-section--course-authors">
                <h4 className="author-section--title">Course Authors</h4>
                {getAuthors().length ? (
                    <ul className="author-section--authors-list">
                        {getAuthors().map((author) => (
                            <AuthorItem
                                key={author.id}
                                adding={false}
                                author={author}
                                onButtonClick={() => onRemovalFromList(author)}
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
