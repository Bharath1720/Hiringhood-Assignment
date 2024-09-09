import React from "react";

const SearchBar = ({ searchCity, setSearchCity, handleSearch }) => (
  <div className="flex items-center">
    <input
      type="text"
      placeholder="Enter the city"
      value={searchCity}
      onChange={(e) => setSearchCity(e.target.value)}
      className="p-1.5 rounded-lg border-spacing-0 outline-none"
    />
    <button
      onClick={handleSearch}
      className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg"
    >
      Search
    </button>
  </div>
);

export default SearchBar;
