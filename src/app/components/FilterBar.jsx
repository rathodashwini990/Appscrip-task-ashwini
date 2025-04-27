"use client";

import { useState } from "react";

export default function FilterBar({ sortOption, setSortOption, isFilterVisible, toggleFilter }) {
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div className="filter-bar">
      <button onClick={toggleFilter} className="filter-toggle-btn">
        {isFilterVisible ? "Hide Filters" : "Show Filters"}
      </button>
      <select className="sort-select" value={sortOption} onChange={handleSortChange}>
        <option value="recommended">Recommended</option>
        <option value="newest">Newest First</option>
        <option value="popular">Popular</option>
        <option value="lowToHigh">Price: Low to High</option>
        <option value="highToLow">Price: High to Low</option>
      </select>
    </div>
  );
}