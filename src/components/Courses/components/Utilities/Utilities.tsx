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

    return (
        <section className="options-section">
            <SearchBar onSearch={onSearch} onSearchCleared={onSearchCleared} />
            <Button
                onClick={() => {
                    navigate("/courses/add");
                }}
            >
                Add new course
            </Button>
        </section>
    );
}
