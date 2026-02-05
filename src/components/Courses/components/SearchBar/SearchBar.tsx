import { useState } from "react";
import Button from "../../../../common/Button/Button";
import Input from "../../../../common/Input/Input";
import "./SearchBar.css";

export default function SearchBar() {
    const [searchText, setSearchText] = useState("");

    function handleSearch(value: string): void {
        setSearchText(value);
    }

    return (
        <div className="search-section">
            <Input
                inputName="search-input"
                labelText=""
                placeholderText="Input text"
                value={searchText}
                valid={true}
                onChange={handleSearch}
            />
            <Button buttonText="Search" />
        </div>
    );
}
