import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

function OrderHistory() {
  const [orders, setOrders] = useState([]);
  const router = useRouter();
  const { customerId } = router.query;

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await fetch(`/api/orders?customerId=${customerId}`);
        if (response.ok) {
          const data = await response.json();
          setOrders(data);
        } else {
          console.error('Failed to fetch orders');
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    }

    if (customerId) {
      fetchOrders();
    }
  }, [customerId]);

  return (
    <div><br />
      <h2>Order History</h2><br />
      {orders.length > 0 ? (
        orders.map((order) => (
          <div key={order.id}>
            <p>Order ID: {order.id}</p>
            <p>Customer ID: {order.customerId}</p>
            <p>Is Open: {order.isOpen ? 'Open' : 'Closed'}</p>
            <p>Payment Type: {order.paymentType.name}</p>
            <p>Date Created: {order.dateCreated}</p>
            <ul>
              {order.products.map((product) => (
                <li key={product.id}>{product.name}</li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>No orders found!</p>
      )}
    </div>
  );
}

export default OrderHistory;
