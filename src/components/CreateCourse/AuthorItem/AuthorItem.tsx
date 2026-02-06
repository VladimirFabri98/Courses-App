import "./AuthorItem.css";
import addButtonSvg from "../../../assets/add.svg";
import deleteButtonSvg from "../../../assets/trash.svg";
import Button from "../../../common/Button/Button";

export default function AuthorItem() {
    return (
        <li className="author-item">
            <p className="author-name">Author Name</p>
            <Button>
                <img></img>
            </Button>
            <Button>
                <img></img>
            </Button>
        </li>
    );
}
