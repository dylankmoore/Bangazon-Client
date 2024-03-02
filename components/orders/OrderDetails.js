import React from 'react';
import PropTypes from 'prop-types';

const OrderDetails = ({ order }) => (
  <div className="order-details">
    <h2>Order ID: {order.id}</h2>
    <p>Customer ID: {order.customerId}</p>
    <p>Is Open: {order.isOpen ? 'Yes' : 'No'}</p>
    <p>Payment Type ID: {order.paymentTypeId}</p>
    <p>Date Created: {order.dateCreated}</p>
    <h3>Products:</h3>
    <ul>
      {order.products.map((product) => (
        <li key={product.id}>
          <b>{product.name}</b> - ${product.price}
        </li>
      ))}
    </ul>
  </div>
);

OrderDetails.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    customerId: PropTypes.number.isRequired,
    isOpen: PropTypes.bool.isRequired,
    paymentTypeId: PropTypes.number.isRequired,
    dateCreated: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default OrderDetails;
