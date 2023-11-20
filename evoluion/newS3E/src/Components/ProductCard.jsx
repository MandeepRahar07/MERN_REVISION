
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { id, title, price, location, images } = product;

  return (
    <Link to={`/product/${id}/view`} data-testid="product-card">
      <div>
        <img src={images[0]} alt={title} />
        <p>Price: {price}</p>
        <h3>{title}</h3>
        <p>Location: {location}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
