"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import FilterBar from "./components/FilterBar";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState("recommended");
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await axios.get('https://fakestoreapi.com/products');
      setProducts(res.data);
    }
    fetchProducts();
  }, []);

  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const sortProducts = (products) => {
    switch (sortOption) {
      case "lowToHigh":
        return [...products].sort((a, b) => a.price - b.price);
      case "highToLow":
        return [...products].sort((a, b) => b.price - a.price);
      case "newest":
        return [...products].sort((a, b) => b.id - a.id);
      case "popular":
        return [...products].sort((a, b) => b.rating.count - a.rating.count);
      default:
        return products;
    }
  };

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const filteredProducts = () => {
    let tempProducts = sortProducts(products);
    if (selectedCategories.length > 0) {
      tempProducts = tempProducts.filter(product =>
        selectedCategories.includes(product.category)
      );
    }
    return tempProducts;
  };

  const uniqueCategories = [...new Set(products.map(p => p.category))];

  return (
    <div>
      <Header />
      <main className="container">
        <h1>Discover Our Products</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque.<br />
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>

        <FilterBar
          sortOption={sortOption}
          setSortOption={setSortOption}
          isFilterVisible={isFilterVisible}
          toggleFilter={toggleFilter}
        />

        <div className="products-section">
          {isFilterVisible && (
            <aside className="sidebar">
              <h3>Category</h3>
              {uniqueCategories.map((category) => (
                <label key={category}>
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                  />
                  {category}
                </label>
              ))}
            </aside>
          )}

          <div className="products-grid">
            {filteredProducts().map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}