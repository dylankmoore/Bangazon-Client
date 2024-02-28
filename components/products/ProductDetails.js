/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';

const ProductDetails = ({ product }) => (
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
    <p>Description: {product.description}</p>
    <p>Price: ${product.price}</p>
    <p>Seller: {product.seller?.firstName} {product.seller?.lastName || 'Unknown'}</p>
    <p>Category: {product.category?.name || 'Unknown'}</p>
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
};

export default ProductDetails;
