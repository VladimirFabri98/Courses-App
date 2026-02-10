import "./AuthorItem.css";
import Button from "../../common/Button/Button";
import addIcon from "../../assets/add.svg";
import deleteIcon from "../../assets/trash.svg";
import { Author } from "../../types";

type AuthorItemProps = {
    readonly author: Author;
    readonly onButtonClick: (authorId: string) => void;
    readonly adding: boolean;
};

function AuthorItem({ author, onButtonClick, adding }: AuthorItemProps) {
    return (
        <li className="author-item">
            <p className="author-name">{author.name}</p>
            <Button onClick={adding ? onButtonClick : () => {}}>
                <img src={addIcon} alt="Add author"></img>
            </Button>
            <Button onClick={!adding ? onButtonClick : () => {}}>
                <img src={deleteIcon} alt="Delete author"></img>
            </Button>
        </li>
    );
}

export default AuthorItem;
