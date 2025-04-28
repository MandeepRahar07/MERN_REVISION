import React, { useState } from 'react';

function AddProduct() {
  const [product, setProduct] = useState({
    pic_url: '',
    price: '',
    discount: '',
    author_id: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to be sent
    const orderedProduct = {
      pic_url: product.pic_url,
      price: product.price,
      discount: product.discount,
      author_id: Number(product.author_id) // Ensure author_id is a number
    };

    console.log('Sending Product:', orderedProduct);

    try {
      const response = await fetch('http://localhost:3001/product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderedProduct)
      });

      const data = await response.json();

      if (response.ok) {
        alert('Product added successfully!');
        setProduct({ pic_url: '', price: '', discount: '', author_id: '' }); // Reset form
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      alert('Something went wrong');
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Pic URL</label>
          <input
            type="text"
            name="pic_url"
            value={product.pic_url}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Price</label>
          <input
            type="text"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Discount</label>
          <input
            type="text"
            name="discount"
            value={product.discount}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Author ID</label>
          <input
            type="number"
            name="author_id"
            value={product.author_id}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddProduct;