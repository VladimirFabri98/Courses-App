import { useEffect, useRef, useState } from "react";
import Button from "../../../../common/Button/Button";
import Input from "../../../../common/Input/Input";
import "./SearchBar.css";

type SearchBarProps = {
    readonly onSearch: (searchTerm: string) => void;
    readonly onSearchCleared: () => void;
};

export default function SearchBar({
    onSearch,
    onSearchCleared,
}: SearchBarProps) {
    const [searchText, setSearchText] = useState("");

    const prevSearchTextRef = useRef("");

    useEffect(() => {
        if (
            prevSearchTextRef.current.trim().length > 0 &&
            searchText.trim().length === 0
        ) {
            onSearchCleared();
        }
        prevSearchTextRef.current = searchText;
    }, [searchText, onSearchCleared]);

    function handleSearch(value: string): void {
        setSearchText(value);
    }

    return (
        <div className="search-section">
            <Input
                inputName="search-input"
                labelText=""
                placeholderText="Input text"
                required={false}
                value={searchText}
                valid={true}
                onChange={handleSearch}
                hasWarning={false}
            />
            <Button onClick={() => onSearch(searchText)}>Search</Button>
        </div>
    );
}
