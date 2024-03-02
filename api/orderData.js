import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

// GET ORDERS
const getOrders = () => {
  const url = `${endpoint}/api/orders`;

  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

// GET ORDERS BY CUSTOMER ID
const getOrdersByCustomerId = (customerId) => {
  const url = `${endpoint}/api/orders?customerId=${customerId}`;

  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch orders for customer');
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

// GET ORDER BY ID
const getOrderById = (orderId) => {
  const url = `${endpoint}/api/orders/${orderId}`;

  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch order details');
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

// ADD PRODUCT TO ORDER
const addProductToOrder = (productId, orderId) => {
  const url = `${endpoint}/api/orders/addingProduct`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ productId, orderId }),
  };

  return fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to add product to order');
      }
      return response.json();
    });
};

// DELETE PRODUCT FROM ORDER
const deleteProductFromOrder = (orderId, productId) => {
  const url = `${endpoint}/orders/${orderId}/products/${productId}`;

  return fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to delete product from order');
      }
    });
};

// GET ORDER HISTORY BY CUSTOMER ID
const getOrderHistoryByCustomerId = (customerId) => {
  const url = `${endpoint}/api/order/history/${customerId}`;

  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch order history');
      }
      return response.json();
    });
};

export {
  getOrders,
  getOrdersByCustomerId,
  getOrderById,
  addProductToOrder,
  deleteProductFromOrder,
  getOrderHistoryByCustomerId,
};
