
import React, { useState } from 'react';

const AddProduct = ({ addProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [isDiscounted, setIsDiscounted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price) {
      alert('Name and price are required.');
      return;
    }
    const newProduct = {
      name: name,
      price: price,
      isDiscounted: isDiscounted
    };
    addProduct(newProduct);
    setName('');
    setPrice('');
    setIsDiscounted(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </label>
      <label>
        Discounted:
        <input
          type="checkbox"
          checked={isDiscounted}
          onChange={(e) => setIsDiscounted(e.target.checked)}
        />
      </label>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;
