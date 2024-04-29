
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductItem from './ProductTem';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  // ...

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`northwind.now.sh/api/categories/${productId}`);
      setProducts(products.filter(product => product.id !== productId));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <ProductItem key={product.id} product={product} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
