import React from 'react';

const DeleteProduct = ({ deleteProduct }) => {
  return (
    <div>
      <button onClick={deleteProduct}>Delete Product</button>
    </div>
  );
};

export default DeleteProduct;
