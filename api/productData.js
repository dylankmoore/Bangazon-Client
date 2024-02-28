import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

// GET PRODUCTS
const getProducts = (latest = false) => {
  let url = `${endpoint}/api/products`;
  if (latest) {
    url += '?latest=true';
  }

  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

// GET PRODUCTS BY ID
const getProductById = (productId) => {
  const url = `${endpoint}/api/products/${productId}`;

  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

export { getProducts, getProductById };
