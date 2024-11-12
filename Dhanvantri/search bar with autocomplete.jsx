import React, { useState, useEffect } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (query.length > 2) {
      // Fetch suggestions from the API
      fetch(`/api/medicines?search=${query}`)
        .then((res) => res.json())
        .then((data) => setSuggestions(data));
    } else {
      setSuggestions([]);
    }
  }, [query]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for medicine..."
      />
      <ul>
        {suggestions.map((item, index) => (
          <li key={index} onClick={() => onSearch(item)}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
