// ProductDetailsPage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../Components/Loading';

const ProductDetailsPage = ({ params }) => {
  const { id } = params;
  const [productDetails, setProductDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/product/${id}`);
        setProductDetails(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  return (
    <div data-testid="product-details-page">
      {loading ? (
        <Loading />
      ) : (
        <>
          <h2>{productDetails.title}</h2>
          <p>{productDetails.description}</p>
          <p>Category: {productDetails.category}</p>
          <p>Price: ${productDetails.price}</p>
          <p>Location: {productDetails.location}</p>
          <p>Seller: {productDetails.seller.name}</p>
          <p>Email: {productDetails.seller.email}</p>
          <p>Created At: {productDetails.createdAt}</p>
          <h3>Images:</h3>
          <div className="images">
            {productDetails.images.map((image, index) => (
              <img key={index} src={image} alt={`Product ${index + 1}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetailsPage;
