import Button from "../../../common/Button/Button";
import Input from "../../../common/Input/Input";
import AuthorItem from "../AuthorItem/AuthorItem";
import "./AuthorSection.css";
import { useEffect, useState } from "react";
import { Author, User } from "../../../types";
import { RootState, useAppDispatch } from "@/store";
import { useSelector } from "react-redux";
import { addNewAuthor } from "@/store/authors/thunk";

type AuthorSectionProps = {
    readonly getCourseAuthors: () => Author[];
    readonly updateCourseAuthors: (authors: Author[]) => void;
    readonly addCourseAuthor: (author: Author) => void;
    readonly isFormValid: boolean;
    readonly user: User;
};

export default function AuthorSection({
    getCourseAuthors,
    updateCourseAuthors,
    addCourseAuthor,
    isFormValid,
    user,
}: AuthorSectionProps) {
    const [authorName, setAuthorName] = useState("");
    const [formValid, setFormValid] = useState(true);
    const { authorsData, authorsStatus } = useSelector(
        (state: RootState) => state.authorsSlice
    );
    const [tempAuthorsList, setTempAuthorsList] = useState(authorsData);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const listWithoutCourseAuthors = authorsData.filter((authorOne) => {
            return !getCourseAuthors().some(
                (authorTwo) => authorTwo.id === authorOne.id
            );
        });
        setTempAuthorsList(listWithoutCourseAuthors);
    }, [authorsStatus]);

    function onAuthorNameChange(value: string) {
        setAuthorName(value.trimStart());
    }

    function handleAddingNewAuthor(): void {
        if (!(authorName.trim().length >= 2)) {
            setFormValid(false);
            return;
        }

        setFormValid(true);
        const newAuthor = { name: authorName };
        dispatch(addNewAuthor({ token: user.token, body: newAuthor }));
        onAuthorNameChange("");
    }

    // UI functions - Relationship between Authors List(state in Author Section) and Course Authors List (state in Course Form)
    function onAddingFromListOfAuthorsToCourseAuthors(authorId: string) {
        const author = tempAuthorsList.find((a: Author) => a.id === authorId);
        if (!author) return;
        setTempAuthorsList(
            tempAuthorsList.filter((author: Author) => {
                return author.id !== authorId;
            })
        );
        addCourseAuthor(author);
    }

    function onRemovalFromCourseAuthors(authorId: string) {
        const author = getCourseAuthors().find((a) => a.id === authorId);
        if (!author) return;

        const updatedCoursesList = getCourseAuthors().filter(
            (courseAuthor) => courseAuthor.id !== authorId
        );
        updateCourseAuthors(updatedCoursesList);
        setTempAuthorsList((prev: Author[]) => [...prev, author]);
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
                        valid={authorName ? true : false}
                        formvalid={formValid}
                        required={false}
                        hasWarning={false}
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
                    {tempAuthorsList.map((author: Author) => (
                        <AuthorItem
                            author={author}
                            adding={true}
                            key={author.id}
                            onButtonClick={() =>
                                onAddingFromListOfAuthorsToCourseAuthors(
                                    author.id
                                )
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
                                    onRemovalFromCourseAuthors(author.id)
                                }
                            />
                        ))}
                    </ul>
                ) : (
                    <>
                        <p className="author-section--no-authors">
                            Author list is empty
                        </p>
                        {!isFormValid && (
                            <p
                                className="author-section--no-authors"
                                style={{ color: "red" }}
                            >
                                Course requires an author!
                            </p>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
