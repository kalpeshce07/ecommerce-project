import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div
      key={product.id}
      style={{
        border: "1px solid #cccccc2a",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <h3>
        <Link to={`/product/${product.id}`}>{product.name}</Link>
      </h3>
      <p>{product.description}</p>
      <p>Price: ₹{product.price}</p>
      <img src={product.imageUrl} alt={product.name} width="150" />
      <div>
        <button onClick={() => addToCart(product)}>Add To Cart</button>
      </div>
    </div>
  );
};
export default ProductCard;
