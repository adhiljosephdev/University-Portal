import React, { useState } from 'react';

function SearchBar() {

  // 1. Get the text from the input
  const [query, setQuery] = useState("");

  // 2. Update React state
  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <p>Search for a course:</p>

      <input
        type="text"
        value={query} // Input value is locked to state
        onChange={handleChange} // Changes update state
      />

      <p>You are typing: {query}</p>
    </div>
  );
}

export default SearchBar;