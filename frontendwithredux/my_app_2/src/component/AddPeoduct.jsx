import React, { useState } from 'react';
import { getrequest, postrequest } from '../Redux/actions';
import { useDispatch } from 'react-redux';

function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: ""
  });
  
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postrequest(formData));
    dispatch(getrequest());
};
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  return (
    <div>
      AddProduct
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input 
          type="text" 
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
        <select name="category" onChange={handleChange} value={formData.category}>
          <option value="phone">Phone</option>
          <option value="watch">Watch</option>
        </select>
        <button>submit</button>
      </form>
    </div>
  );
}

export default AddProduct;
