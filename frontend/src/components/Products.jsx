import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import Card from "./Card.jsx";
import "./../index.css";
// import "./../styles.css";
const Products = () => {
  const API_URL = "https://localhost:7001/api/products";

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Products</h1>

      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {products.map((product) => (
            <ProductCard  key={product.id} product={product} />
          ))}
        </div>
      )}
      <div>
        <Link to="/cart">Go to Cart</Link>
      </div>
    </div>
  );
};
export default Products;
