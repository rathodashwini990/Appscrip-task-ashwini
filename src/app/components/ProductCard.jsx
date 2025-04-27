"use client";

import { useState } from "react";

export default function ProductCard({ product }) {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="product-card">
      <div className="wishlist-icon" onClick={toggleLike}>
        {liked ? "❤️" : "🤍"}
      </div>
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>Sign in or Create an account to see pricing</p>
    </div>
  );
}