import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams(); // Extract the product ID from the route parameter
  const [product, setProduct] = useState(null);
 console.log(id)
  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/product/${id}`);
      setProduct(response.data); // Update the product state with the fetched data
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  if (!product) {
    return <h1>Loading...</h1>; // Show a loading state while fetching the product
  }

  return (
    <div>
      <h1>Product Details:</h1>
      <p>Name: {product.name}</p>

    </div>
  );
};

export default ProductDetails;
