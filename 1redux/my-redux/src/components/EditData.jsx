import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EditData({ productId, onProductUpdated }) {
  const [productData, setProductData] = useState({
    name: '',
    status: '',
    rate: '',
  });
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch existing product data based on the provided productId
        const response = await axios.get(`http://localhost:8080/mandy/${productId}`);
        setProductData(response.data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchData();
  }, [productId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      // Send a PUT request to update the existing product data
      const response = await axios.put(`http://localhost:8080/mandy/${productId}`, productData);
      console.log('Product updated:', response.data);

      // If successful, trigger the onProductUpdated callback
      if (onProductUpdated) {
        onProductUpdated(response.data);
      }
    } catch (error) {
      console.error('Error updating product data:', error);
    }
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <form onSubmit={handleUpdate}>
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
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
}

export default EditData;
