import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

// GET CATEGORIES
const getCategories = () => {
  const url = `${endpoint}/api/categories`;

  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

export default getCategories;
