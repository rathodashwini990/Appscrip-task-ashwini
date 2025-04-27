export default function ProductCard({ product }) {
    return (
      <div className="product-card">
        <div className="wishlist-icon">🤍</div>
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>Sign in or Create an account to see pricing</p>
      </div>
    );
  }  