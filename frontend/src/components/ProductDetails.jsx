import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const fetchProduct = async () => {
    try {
      const response = await fetch(`https://localhost:7001/api/products/${id}`);
      if (!response.ok) {
        throw new error("Product not found");
      }
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("Error while fetching product", error);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, [id]);
  if (!product) return <p>Product Loading ....</p>;

  return (<div style={{ padding: "20px" }}>
    <h2>{product.name}</h2>
    <p>{product.description}</p>
    <p>Price:${product.price}</p>
     <img
                src={product.imageUrl}
                alt={product.name}
                width="150"
              />
  </div>);
};
export default ProductDetails;
