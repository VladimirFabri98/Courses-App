import Button from "../../../../common/Button/Button";
import "./SearchBar.css";

export default function SearchBar() {
    return (
        <div className="search-section">
            <input
                className="search-input"
                placeholder="Input text"
                name="search-input"
                type="text"
            />
            <Button buttonText="Search" />
        </div>
    );
}
