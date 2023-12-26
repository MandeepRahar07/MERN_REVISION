import React, { useState } from 'react';
import axios from 'axios';

function AddProduct({ onProductAdded }) {
  const [productData, setProductData] = useState({
    name: '',
    status: '',
    rate: '',
  });

  const handleChange = (e) => {
    setProductData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to add the new product
      const response = await axios.post('http://localhost:8080/mandy', productData);
      console.log('Product added:', response.data);

      // If successful, trigger the onProductAdded callback
      if (onProductAdded) {
        onProductAdded(response.data);
      }

      // Clear the form
      setProductData({
        name: '',
        status: '',
        rate: '',
      });
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Status:</label>
          <input
            type="text"
            name="status"
            value={productData.status}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Rate:</label>
          <input
            type="number"
            name="rate"
            value={productData.rate}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}
export default AddProduct;

