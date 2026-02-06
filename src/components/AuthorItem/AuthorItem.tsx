import "./AuthorItem.css";
import Button from "../../common/Button/Button";
import addIcon from "../../assets/add.svg";
import deleteIcon from "../../assets/trash.svg";

type AuthorItemProps = {
    readonly authorsName: string;
    readonly isAuthorsList: boolean;
    readonly onButtonClick: (author: string) => void;
};

function AuthorItem({
    authorsName,
    isAuthorsList,
    onButtonClick,
}: AuthorItemProps) {
    return (
        <li className="author-item">
            <p className="author-name">{authorsName}</p>
            {isAuthorsList ? (
                <Button onClick={onButtonClick}>
                    <img src={addIcon} alt="Add author"></img>
                </Button>
            ) : (
                <Button onClick={onButtonClick}>
                    <img src={deleteIcon} alt="Delete author"></img>
                </Button>
            )}
        </li>
    );
}

export default AuthorItem;
