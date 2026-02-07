import "./AuthorItem.css";
import Button from "../../common/Button/Button";
import addIcon from "../../assets/add.svg";
import deleteIcon from "../../assets/trash.svg";

type AuthorItemProps = {
    readonly authorsName: string;
    readonly onButtonClick: (author: string) => void;
};

function AuthorItem(props: any) {
    return (
        <li className="author-item">
            <p>{JSON.stringify(props, null, 2)}</p>
            {/* <p className="author-name">{authorsName}</p>
            <Button onClick={onButtonClick}>
                <img src={addIcon} alt="Add author"></img>
            </Button>
            <Button onClick={onButtonClick}>
                <img src={deleteIcon} alt="Delete author"></img>
            </Button> */}
            )
        </li>
    );
}

export default AuthorItem;
