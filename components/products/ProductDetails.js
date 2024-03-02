/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';

const ProductDetails = ({ product, handleAddToCart }) => (
  <div className="product-details">
    <br /><h1>{product.name}</h1><br />
    <img
      src={product.imageURL}
      alt={product.name}
      style={{
        maxWidth: '200px',
        maxHeight: '200px',
        marginBottom: '10px',
      }}
    />
    <p><b>Description</b>: {product.description}</p>
    <p><b>Price</b>: ${product.price}</p>
    <p><b>Seller</b>: {product.seller?.firstName} {product.seller?.lastName || 'Unknown'}</p>
    <p><b>Category</b>: {product.category?.name || 'Unknown'}</p><br />
    <button type="button" onClick={() => handleAddToCart(product.id)}>Add to Cart</button>

  </div>
);

ProductDetails.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number.isRequired,
    seller: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
    }),
    category: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};

export default ProductDetails;
