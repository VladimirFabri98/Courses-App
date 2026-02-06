import Button from "../../../common/Button/Button";
import Input from "../../../common/Input/Input";
import AuthorItem from "../AuthorItem/AuthorItem";
import "./AuthorSection.css";

type AuthorSectionProps = {
    readonly authorName: string;
    readonly onAuthorNameChange: (value: string) => void;
};

export default function AuthorSection({
    authorName,
    onAuthorNameChange,
}: AuthorSectionProps) {
    return (
        <div className="author-section--container">
            <div className="author-section--authors-list">
                <h4 className="author-section--title">Authors</h4>
                <div className="author-section--create-section">
                    <Input
                        inputName="Author Name"
                        labelText="Author Name"
                        placeholderText="Input text"
                        valid={true}
                        required={false}
                        hasWarning={false}
                        value={authorName}
                        onChange={onAuthorNameChange}
                        minLength={2}
                    />
                    <Button>Create Author</Button>
                </div>
                <h5 className="author-section--subtitle">Authors List</h5>
                <AuthorItem />
            </div>
            <div className="author-section--course-authors">
                <h4 className="author-section--title">Course Authors</h4>
                <p className="author-section--no-authors">
                    Author list is empty
                </p>
            </div>
        </div>
    );
}
