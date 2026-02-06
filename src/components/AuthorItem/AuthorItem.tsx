import "./AuthorItem.css";
import Button from "../../common/Button/Button";
import addIcon from "../../assets/add.svg";
import deleteIcon from "../../assets/trash.svg";

type AuthorItemProps = {
    readonly authorName: string;
    readonly handleAdding?: () => void;
    readonly handleDeletion?: () => void;
};

function AuthorItem({
    authorName,
    handleAdding = () => {},
    handleDeletion = () => {},
}: AuthorItemProps) {
    return (
        <li className="author-item">
            <p className="author-name">{authorName}</p>
            <Button onClick={handleAdding}>
                <img src={addIcon} alt="Add author"></img>
            </Button>
            <Button onClick={handleDeletion}>
                <img src={deleteIcon} alt="Delete author"></img>
            </Button>
        </li>
    );
}

export default AuthorItem;
