import { useNavigate } from "react-router-dom";
import Button from "../../../../common/Button/Button";
import SearchBar from "../SearchBar/SearchBar";
import "./Utilities.css";

type UtilitiesProps = {
    readonly onSearch: (searchTerm: string) => void;
    readonly onSearchCleared: () => void;
};

export default function Utilities({
    onSearch,
    onSearchCleared,
}: UtilitiesProps) {
    const navigate = useNavigate();

    function onAddNewCourse() {
        navigate("/courses/add");
    }

    return (
        <section className="options-section">
            <SearchBar onSearch={onSearch} onSearchCleared={onSearchCleared} />
            <Button onClick={onAddNewCourse}>Add new course</Button>
        </section>
    );
}
