import React, { useState } from "react";

const Search: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (event.target.value.length === 0) {
      setIsActive(false);
    }
  };

  const handleSearch = async (value: string) => {
    try {
      const response = await fetch(`/api/search?term=${value}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error("Error retrieving search results:", error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    handleSearch(value);
  };

  return (
    <div className="cntr">
      <div className="cntr-innr">
        <label
          className={`search ${isActive ? "active" : ""}`}
          htmlFor="search_input"
        >
          <input
            className="search_input"
            type="text"
            value={searchTerm}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </label>
        {isActive && searchResults.length > 0 && (
          <div className="search_results">
            <ul>
              {searchResults.map((result: any) => (
                <li key={result.id}>{result.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
