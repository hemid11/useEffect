
import React from 'react';

const ProductItem = ({ product, onDelete }) => {
  const handleDelete = () => {
    onDelete(product.id);
  };

  return (
    <div className="product-item">
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <p>{product.isDiscounted ? 'Discounted' : 'Regular'}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ProductItem;
