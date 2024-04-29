import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductItem from './components/ProductTem';
import AddProduct from './components/AddProduct';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://northwind.vercel.app/api/categories')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const addProduct = (newProduct) => {
    axios.post('https://northwind.vercel.app/api/categories', newProduct)
      .then(response => {
        setProducts([...products, response.data]);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const deleteProduct = (id) => {
    axios.delete(`https://northwind.vercel.app/api/categories/${id}`)
      .then(() => {
        setProducts(products.filter(product => product.id !== id));
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <h1>Products</h1>
      <AddProduct addProduct={addProduct} />
      <ul>
        {products.map(product => (
          <ProductItem key={product.id} product={product} deleteProduct={deleteProduct} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
