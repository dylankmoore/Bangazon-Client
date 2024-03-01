import React, { useState, useEffect } from 'react';
import getCategories from '../api/categoryData';

function Categories() {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const data = await getCategories();
      console.warn('Categories data:', data);
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div>
      <br />
      <h2>Product Categories</h2>
      <br />
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <strong>{category.name}</strong> ({category.products.length} products):
            <ul>
              {category.products.map((product) => (
                <li key={product.id}>
                  <a href={`/products/${product.id}`}>
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
