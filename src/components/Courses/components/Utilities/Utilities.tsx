import Button from "../../../../common/Button/Button";
import SearchBar from "../SearchBar/SearchBar";
import "./Utilities.css";

export default function Utilities() {
    return (
        <section className="options-section">
            <SearchBar />
            <Button buttonText="Add new course" />
        </section>
    );
}
