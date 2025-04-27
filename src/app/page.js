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

  useEffect(() => {
    async function fetchProducts() {
      const res = await axios.get('https://fakestoreapi.com/products');
      setProducts(res.data);
    }
    fetchProducts();
  }, []);

  const sortProducts = (products) => {
    switch (sortOption) {
      case "lowToHigh":
        return [...products].sort((a, b) => a.price - b.price);
      case "highToLow":
        return [...products].sort((a, b) => b.price - a.price);
      case "newest":
        return [...products].sort((a, b) => b.id - a.id);
      case "popular":
        return [...products].sort((a, b) => a.rating.count - b.rating.count);
      default:
        return products;
    }
  };

  return (
    <div>
      <Header />
      <main className="container">
        <h1>Discover Our Products</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque.<br />
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
        <FilterBar sortOption={sortOption} setSortOption={setSortOption} />
        <div className="products-grid">
          {sortProducts(products).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}