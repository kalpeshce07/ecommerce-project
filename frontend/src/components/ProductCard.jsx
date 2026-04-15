import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import "./../styles.css";
import Card from "./Card.jsx";
const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  return (
    // <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"   key={product.id}>
    <Card>
      <h3 className="text-lg font-semibold mt-3">
        <Link to={`/product/${product.id}`}>{product.name}</Link>
      </h3>
      <p className="text-sm text-gray-500">{product.description}</p>
      <p className="text-green-600 font-bold mt-2">Price: ₹{product.price}</p>
      <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover rounded" />
      <div>
        <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600" 
        onClick={() => addToCart(product)}>Add To Cart</button>
      </div>
      </Card>
    // </div>
  );
};
export default ProductCard;
