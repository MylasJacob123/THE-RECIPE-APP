import React, { useState } from 'react';
import "./Search.css"

function Search({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="search">
      <input className="search-input"
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="search-btn" onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Search;
