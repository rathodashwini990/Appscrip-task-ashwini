"use client";

import { useState } from "react";

export default function FilterBar({ sortOption, setSortOption }) {
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div className="filter-bar">
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