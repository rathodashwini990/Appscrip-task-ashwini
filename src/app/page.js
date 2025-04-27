import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import FilterBar from "./components/FilterBar";

async function getProducts() {
  const res = await axios.get('https://fakestoreapi.com/products');
  return res.data;
}

export default async function Home() {
  const products = await getProducts();

  return (
    <div>
      <Header />
      <main className="container">
        <h1>Discover Our Products</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque.</p>
        <FilterBar />
        <div className="products-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}