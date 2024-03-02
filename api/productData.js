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

// ADD PRODUCT TO CART
const addProductToCart = (productId, customerId) => {
  const url = `${endpoint}/api/cart`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ productId, customerId }),
  };

  return fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to add product to cart');
      }
      return response.json();
    });
};

// GET CART DETAILS/PRODUCTS
const getCartDetails = (customerId) => {
  console.warn('Fetching cart details for customerId:', customerId);
  const url = `${endpoint}/api/cart?customerId=${customerId}`;
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch cart details');
      }
      return response.json();
    });
};

// SEARCH PRODUCTS
const searchProducts = (searchQuery) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/products/search?searchQuery=${encodeURIComponent(searchQuery)}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

export {
  getProducts,
  getProductById,
  addProductToCart,
  getCartDetails,
  searchProducts,
};
