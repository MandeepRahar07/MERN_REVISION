import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { PutProductdata, fetchProductDatabyid } from '../Redux/actions'; // Import the fetchProductDatabyid action
import { useParams, Navigate, useNavigate } from 'react-router-dom';

// Import statements...

function ProductEdit() {
  const [adddata, setadddata] = useState({
    name: "",
    price: "",
    category: ""
  });
 
 const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setadddata({
      ...adddata,
      [name]: name === "price" ? parseFloat(value) : value
    });
  };

  useEffect(() => {
    // Fetch the product data based on the ID
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/mandeep/${id}`);
        setadddata(response.data); // Set the form data with the fetched data
      } catch (error) {
        console.error('Error while fetching data:', error);
      }
    };

    fetchData();
  }, [id]);
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(PutProductdata(id, adddata))
    navigate('/')
  };

  return (
    <div>
      <h1>Edit Product</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={adddata.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          value={adddata.price}
          onChange={handleChange}
        />
        <select
          name="category"
          value={adddata.category}
          onChange={handleChange}
        >
          <option value="phone">Phone</option>
          <option value="watch">Watch</option>
          <option value="airpods">Airpods</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ProductEdit;
