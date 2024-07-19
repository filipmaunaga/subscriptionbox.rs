import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../styles/components/Search.scss";

interface SearchComponentProps {
  onSearch: (query: string) => void;
}

const Search: React.FC<SearchComponentProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    onSearch(newQuery); // Filter on each keystroke
  };

  return (
    <div className="search-container">
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
